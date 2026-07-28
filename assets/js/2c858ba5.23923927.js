"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["904672"],{980090(e,s,t){t.r(s),t.d(s,{metadata:()=>n,default:()=>m,frontMatter:()=>l,contentTitle:()=>h,toc:()=>u,assets:()=>p});var n=JSON.parse('{"id":"services/fsx/and_attach_s3_access_points/index","title":"and_attach_s3_access_points","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/fsx/and_attach_s3_access_points/index.md","sourceDirName":"services/fsx/and_attach_s3_access_points","slug":"/services/fsx/and_attach_s3_access_points/","permalink":"/services/fsx/and_attach_s3_access_points/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"and_attach_s3_access_points","hide_title":false,"hide_table_of_contents":false,"keywords":["and_attach_s3_access_points","fsx","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"fsx","permalink":"/services/fsx/"},"next":{"title":"and_delete_s3_access_points","permalink":"/services/fsx/and_delete_s3_access_points/"}}'),a=t(474848),i=t(28453),c=t(97362),r=t(897272),o=t(413554),d=t(541647);let l={title:"and_attach_s3_access_points",hide_title:!1,hide_table_of_contents:!1,keywords:["and_attach_s3_access_points","fsx","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function _(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists an ",(0,a.jsx)("code",{children:"and_attach_s3_access_points"})," resource."]}),"\n",(0,a.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(c.A,{code:"and_attach_s3_access_points"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(c.A,{code:"aws.fsx.and_attach_s3_access_points"})})]})]})}),"\n",(0,a.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.p,{children:["The following fields are returned by ",(0,a.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"SELECT"})," not supported for this resource, use ",(0,a.jsx)(s.code,{children:"SHOW METHODS"})," to view available operations for the resource."]}),"\n",(0,a.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_and_attach_s3_access_point",children:(0,a.jsx)(c.A,{code:"create_and_attach_s3_access_point"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(c.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-Name",children:(0,a.jsx)("code",{children:"Name"})}),", ",(0,a.jsx)("a",{href:"#parameter-Type",children:(0,a.jsx)("code",{children:"Type"})})]}),(0,a.jsx)("td",{}),(0,a.jsxs)("td",{children:["Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information, see Accessing your data using Amazon S3 access points. in the Amazon FSx for OpenZFS User Guide. The requester requires the following permissions to perform these actions: fsx",":CreateAndAttachS3AccessPoint"," s3",":CreateAccessPoint"," s3",":GetAccessPoint"," s3",":PutAccessPointPolicy"," s3",":DeleteAccessPoint"," The following actions are related to CreateAndAttachS3AccessPoint: DescribeS3AccessPointAttachments DetachAndDeleteS3AccessPoint"]})]})})]}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,a.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(c.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,a.jsxs)(s.h2,{id:"insert-examples",children:[(0,a.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"create_and_attach_s3_access_point",values:[{label:"create_and_attach_s3_access_point",value:"create_and_attach_s3_access_point"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(d.A,{value:"create_and_attach_s3_access_point",children:[(0,a.jsxs)(s.p,{children:["Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information, see Accessing your data using Amazon S3 access points. in the Amazon FSx for OpenZFS User Guide. The requester requires the following permissions to perform these actions: fsx",":CreateAndAttachS3AccessPoint"," s3",":CreateAccessPoint"," s3",":GetAccessPoint"," s3",":PutAccessPointPolicy"," s3",":DeleteAccessPoint"," The following actions are related to CreateAndAttachS3AccessPoint: DescribeS3AccessPointAttachments DetachAndDeleteS3AccessPoint"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.fsx.and_attach_s3_access_points (\nClientRequestToken,\nName,\nType,\nOpenZFSConfiguration,\nOntapConfiguration,\nS3AccessPoint,\nregion\n)\nSELECT \n'{{ ClientRequestToken }}',\n'{{ Name }}' /* required */,\n'{{ Type }}' /* required */,\n'{{ OpenZFSConfiguration }}',\n'{{ OntapConfiguration }}',\n'{{ S3AccessPoint }}',\n'{{ region }}'\nRETURNING\nS3AccessPointAttachment\n;\n"})})]}),(0,a.jsx)(d.A,{value:"manifest",children:(0,a.jsx)(r.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: and_attach_s3_access_points
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the and_attach_s3_access_points resource.
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
    description: |
      (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
  - name: Name
    value: "{{ Name }}"
    description: |
      The name you want to assign to this S3 access point.
  - name: Type
    value: "{{ Type }}"
    description: |
      The type of S3 access point you want to create. Only OpenZFS is supported.
    valid_values: ['OPENZFS', 'ONTAP']
  - name: OpenZFSConfiguration
    description: |
      Specifies the configuration to use when creating and attaching an S3 access point to an FSx for OpenZFS volume.
    value:
      VolumeId: "{{ VolumeId }}"
      FileSystemIdentity:
        Type: "{{ Type }}"
        PosixUser:
          Uid: {{ Uid }}
          Gid: {{ Gid }}
          SecondaryGids:
            - {{ SecondaryGids }}
  - name: OntapConfiguration
    description: |
      Specifies the FSx for ONTAP volume that the S3 access point will be attached to, and the file system user identity.
    value:
      VolumeId: "{{ VolumeId }}"
      FileSystemIdentity:
        Type: "{{ Type }}"
        UnixUser:
          Name: "{{ Name }}"
        WindowsUser:
          Name: "{{ Name }}"
  - name: S3AccessPoint
    description: |
      Specifies the virtual private cloud (VPC) configuration if you're creating an access point that is restricted to a VPC. For more information, see Creating access points restricted to a virtual private cloud.
    value:
      VpcConfiguration:
        VpcId: "{{ VpcId }}"
      Policy: "{{ Policy }}"
`})})]})]})}function m(e={}){let{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}}}]);