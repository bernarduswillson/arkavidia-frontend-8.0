import Image from 'next/image'
import React from 'react'
import CustomButton from '@src/components/CustomButton/CustomButton'
import CustomChip from '@src/components/Chip'
import DashboardCountdown from '@src/components/CountdownCard/dashboardCountdown'
import FoxImage from '@src/assets/images/fox.svg'
import NoAnnouncement from '@src/assets/images/noAnnouncement.svg'
import NotRegistered from '@src/assets/images/StatusNotRegistered.svg'
import Dashboard from '@src/components/Navigation/Dashboard'
import Toast from '@src/components/Toast'
// How to use: <DashboardInfo isEmpty ='true'/>
// isEmpty can be set to 'true' or 'false'

const Section = () => {
  const space = 'mb-[10px]'
  const font = 'font-helvatica'
  return (
    <div className="bg-gray200 pl-[10px] pt-[10px] mb-[13px]">
      <p className={`${space} ${font} font-normal text-[12px]`}>
        DD/MM/YYYY, HH:MM WIB
      </p>
      <p className={`${space} ${font} font-bold text-[16px]`}>
        Judul Informasi
      </p>
      <p className={`${space} ${font} font-normal text-[12px]`}>
        &lt;&lt;Jangan lupa untuk melengkapi dokumen pendaftaran karena h-3
        pendaftaran akan ditutup&gt;&gt;
      </p>
    </div>
  )
}

const TextChipVerifikasi = (props: any) => {
  const { text, variant, textSize } = props
  const chipStyle = 'w-[160px] h-[24px] flex justify-center items-center'
  return (
    <div className="grid grid-cols-2 mb-[10px]">
      <div
        className={`font-helvatica font-bold text-[${textSize}] col-span-1 flex items-center`}>
        {text}
      </div>
      <div className="flex justify-center items-center pr-[10px]">
        <CustomChip variant={variant} shadow={false} className={`${chipStyle}`}>
          Verifikasi Berhasil
        </CustomChip>
      </div>
    </div>
  )
}

const Anggota = (props: any) => {
  const { Jabatan, Nama, className } = props
  return (
    <div className="bg-gray200 py-[10px] mb-[12px] pl-[10px]">
      <div className="font-helvatica font-bold text-[16px] ">{Jabatan}</div>
      <div className="font-helvatica text-400 text-[12px] mb-[10px] mt-[2px]">
        {Nama}
      </div>
      <TextChipVerifikasi
        text="Foto Profil"
        variant="greenVerifikasi"
        textSize="12px"
      />
      <TextChipVerifikasi
        text="Foto Kartu Pelajar"
        variant="greenVerifikasi"
        textSize="12px"
      />
      <TextChipVerifikasi
        text="File Bukti Mahasiswa"
        variant="greenVerifikasi"
        textSize="12px"
      />
    </div>
  )
}

const TextDate = (props: any) => {
  const text1 = props.text1
  const text2 = props.text2
  return (
    <div className="flex justify-between mb-[18px]">
      <div className="flex pl-[12px] font-bold text-[12px] leading-[13.8px] justify-center items-center">
        {text1}
      </div>
      <div className="flex bg-black text-white font-helvatica font-bold text-[12px] items-center justify-center px-2 py-1 mr-3">
        {text2}
      </div>
    </div>
  )
}

const DashboardInfo = (props: any) => {
  const isEmpty = props.isEmpty
  const subHeader1Style =
    'font-archivo font-black text-[24px] mt-[24px] pl-[10px]'
  const textStyle = 'font-helvatica font-normal text-[12px] pl-[10px]'
  return (
    <div className="bg-[rgb(236,236,236)] relative">
      <Toast
        timer={6000}
        label={
          <>
            Please fill this form for alternative signup/registration if you are
            experiencing issues:{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTii0F2iEsHCObkS1FVdUi1uewwrDopTD9e7StxYE4o7Owdw/viewform"
              target="_blank"
              style={{ textDecoration: 'underline' }}>
              bit.ly/TemporaryFormArkavidia
            </a>
          </>
        }
        type={'danger'}
        position={'bottom'}
        key={'toast1'}
      />
      <Dashboard>
        <div className="w-full">
          <div className="w-full mr-[116px] ml-[5px]">
            <div className="ml-[11px] mb-[30px]">
              <div className="font-archivo text-900 text-[48px] ml-[2px] text-white text-stroke-black text-shadow">
                Informasi
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[12px] z-[20]">
              {isEmpty === 'false' ? (
                <>
                  <div className="grid grid-row-2 pl-[4%]  rounded-[8px]">
                    <div className="rounded-[8px] bg-white pl-[12px]">
                      <div>
                        <h5 className={`${subHeader1Style}`}>Penyisihan</h5>
                      </div>
                      <div>
                        <p className={`${textStyle} mt-2 mb-2`}>
                          Masuk untuk memulai perlombaan di babak penyisihan
                        </p>
                      </div>
                      <div className="flex justify-center pt-[12px]">
                        <CustomButton bgColor="primary" size="normal">
                          Mulai Perlombaan
                        </CustomButton>
                      </div>
                    </div>
                    <div className="rounded-[8px] bg-white mt-[10px] pr-[20px] pl-[12px] z-[10]">
                      <p className={`${subHeader1Style} mb-[22px]`}>
                        Pengumuman
                      </p>
                      <Section />
                      <Section />
                      <Section />
                      <Section />
                    </div>
                  </div>
                  <div className="bg-white px-[12px] rounded-[8px]">
                    <h6 className={`${subHeader1Style} mb-[22px]`}>
                      Status Profil
                    </h6>
                    <div className="pt-[13px] pb-[3px] pl-[10px]">
                      <TextChipVerifikasi
                        text="Status Tim"
                        variant="greenVerifikasi"
                        textSize="16px"
                      />
                    </div>
                    <h6 className={`${subHeader1Style}`}>Dokumen Peserta</h6>
                    <p className={`${textStyle} mb-[10px]`}>
                      Harap melengkapi dokumen sebelum dd/mm/yyyy
                    </p>
                    <div className="pt-[10px] ">
                      <Anggota Jabatan="Ketua Tim" Nama="Rich Brian" />
                      <Anggota Jabatan="Anggota 1" Nama="Rich Brian" />
                      <Anggota Jabatan="Anggota 2" Nama="Rich Brian" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid pl-[4%] rounded-[8px] flex-col">
                    <div className="rounded-[8px] bg-white pr-[20px] pl-[12px] ">
                      <p className={`${subHeader1Style} mb-[22px]`}>
                        Pengumuman
                      </p>
                      <div className="flex justify-center mt-[180px]">
                        <Image src={NoAnnouncement} className="" />
                      </div>
                      <div>
                        <p className="font-varela font-normal text-[20px] text-center mx-[22px] my-[22px] capitalize">
                          Belum ada pengumuman nih. Tetap stay tune ya!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-[12px] rounded-[8px]">
                    <h6 className={`${subHeader1Style} mb-[22px]`}>
                      Status Profil
                    </h6>
                    <div className="flex justify-center items-center mt-[130px]">
                      <Image src={NotRegistered} />
                    </div>
                    <p className="capitalize font-varela font-normal text-[20px] text-center mx-[32px] mt-[16px] mb-[10px]">
                      Kamu belum mendaftar perlombaan. Yuk, segera daftarkan
                      tim!
                    </p>
                    <div className="flex justify-center">
                      <CustomButton bgColor="primary" size="normal">
                        Register Now
                      </CustomButton>
                    </div>
                  </div>
                </>
              )}
              {/* <div className="grid ">
                <div className="bg-white mb-[12px] rounded-[8px] max-h-[300px] pb-[15px]">
                  <div
                    className={`${subHeader1Style} mb-[10px] mt-[12px] pl-[12px]`}
                  >
                    Countdown
                  </div>
                  <div className="mb-[12px] pl-[2px]">
                    <TextDate text1="Semifinal" text2="DD/MM/YYY" />
                  </div>
                  <DashboardCountdown date="2023-02-15T23:59:59" />
                </div>
                <div className="bg-white rounded-[8px]">
                  <p className={`${subHeader1Style} pl-[12px] mb-[14px]`}>
                    Timeline
                  </p>
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                  <TextDate text1="Pendaftaran" text2="DD/MM/YYY" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Dashboard>
      <div className="absolute z-0 bottom-0 mb-[-5rem] ml-[-1rem]">
        <Image src={FoxImage} />
      </div>
    </div>
  )
}

export default DashboardInfo
