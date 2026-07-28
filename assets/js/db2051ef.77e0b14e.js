"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["763809"],{92185(e,n,i){i.r(n),i.d(n,{metadata:()=>a,default:()=>p,frontMatter:()=>l,contentTitle:()=>m,toc:()=>u,assets:()=>h});var a=JSON.parse('{"id":"services/sagemaker/domains/index","title":"domains","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/domains/index.md","sourceDirName":"services/sagemaker/domains","slug":"/services/sagemaker/domains/","permalink":"/services/sagemaker/domains/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"domains","hide_title":false,"hide_table_of_contents":false,"keywords":["domains","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"devices","permalink":"/services/sagemaker/devices/"},"next":{"title":"edge_deployment_plans","permalink":"/services/sagemaker/edge_deployment_plans/"}}'),s=i(474848),t=i(28453),r=i(97362),o=i(897272),d=i(413554),c=i(541647);let l={title:"domains",hide_title:!1,hide_table_of_contents:!1,keywords:["domains","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},m,h={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"domains"})," resource."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"domains"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"aws.sagemaker.domains"})})]})]})}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.p,{children:["The following fields are returned by ",(0,s.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_domain",values:[{label:"describe_domain",value:"describe_domain"},{label:"list_domains",value:"list_domains"}],children:[(0,s.jsx)(c.A,{value:"describe_domain",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"AppNetworkAccessType"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly. PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access VpcOnly - All traffic is through the specified VPC and subnets (PublicInternetOnly, VpcOnly)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"AppSecurityGroupManagement"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. (Service, Customer)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"AuthMode"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The domain's authentication mode. (SSO, IAM)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"CreationTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The creation time."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DefaultSpaceSettings"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The default settings for shared spaces that users create in the domain."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DefaultUserSettings"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Settings which are applied to UserProfiles in this domain if settings are not explicitly specified in a given UserProfile."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The domain's Amazon Resource Name (ARN). (pattern: <code>arn",":aws","[a-z-]",(0,s.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":domain","/.*</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: <code>d-(-*[a-z0-9]){1,61}</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainName"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The domain name. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainSettings"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"A collection of Domain settings."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"FailureReason"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The failure reason."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"HomeEfsFileSystemId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the Amazon Elastic File System managed by this Domain."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"HomeEfsFileSystemKmsKeyId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Use KmsKeyId. (pattern: <code>[a-zA-Z0-9:/_-]*</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"KmsKeyId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Web Services KMS customer managed key used to encrypt the EFS volume attached to the domain. (pattern: <code>[a-zA-Z0-9:/_-]*</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"LastModifiedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The last modified time."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"SecurityGroupIdForDomainBoundary"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app. (pattern: <code>[-0-9a-zA-Z]+</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"SingleSignOnApplicationArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The ARN of the application managed by SageMaker AI in IAM Identity Center. This value is only returned for domains created after October 1, 2023. (pattern: <code>arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::[0-9]+",":application","/[a-zA-Z0-9-_.]+/apl-[a-zA-Z0-9]+</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"SingleSignOnManagedApplicationInstanceId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The IAM Identity Center managed application instance ID."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Status"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"SubnetIds"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The VPC subnets that the domain uses for communication."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"TagPropagation"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Indicates whether custom tag propagation is supported for the domain. (ENABLED, DISABLED)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Url"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The domain's URL."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"VpcId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication. (pattern: <code>[-0-9a-zA-Z]+</code>)"})]})]})]})}),(0,s.jsx)(c.A,{value:"list_domains",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"CreationTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The creation time."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The domain's Amazon Resource Name (ARN). (pattern: <code>arn",":aws","[a-z-]",(0,s.jsx)(n.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":domain","/.*</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: <code>d-(-*[a-z0-9]){1,61}</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DomainName"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The domain name. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"LastModifiedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The last modified time."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Status"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Url"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The domain's URL."})]})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#describe_domain",children:(0,s.jsx)(r.A,{code:"describe_domain"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"The description of the domain."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_domains",children:(0,s.jsx)(r.A,{code:"list_domains"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Lists the domains."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_domain",children:(0,s.jsx)(r.A,{code:"create_domain"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-DomainName",children:(0,s.jsx)("code",{children:"DomainName"})}),", ",(0,s.jsx)("a",{href:"#parameter-AuthMode",children:(0,s.jsx)("code",{children:"AuthMode"})}),", ",(0,s.jsx)("a",{href:"#parameter-DefaultUserSettings",children:(0,s.jsx)("code",{children:"DefaultUserSettings"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Creates a Domain. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other. EFS storage When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files. SageMaker AI uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see Protect Data at Rest Using Encryption. VPC configuration All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the AppNetworkAccessType parameter. AppNetworkAccessType corresponds to the network access type that you choose when you onboard to the domain. The following options are available: PublicInternetOnly - Non-EFS traffic goes through a VPC managed by Amazon SageMaker AI, which allows internet access. This is the default value. VpcOnly - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway. When internet access is disabled, you won't be able to run a Amazon SageMaker AI Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker AI API and runtime or a NAT gateway and your security groups allow outbound connections. NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker AI Studio app successfully. For more information, see Connect Amazon SageMaker AI Studio Notebooks to Resources in a VPC."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#update_domain",children:(0,s.jsx)(r.A,{code:"update_domain"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-DomainId",children:(0,s.jsx)("code",{children:"DomainId"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Updates the default settings for new user profiles in the domain."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_domain",children:(0,s.jsx)(r.A,{code:"delete_domain"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"delete"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,s.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"select-examples",children:[(0,s.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_domain",values:[{label:"describe_domain",value:"describe_domain"},{label:"list_domains",value:"list_domains"}],children:[(0,s.jsxs)(c.A,{value:"describe_domain",children:[(0,s.jsx)(n.p,{children:"The description of the domain."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\nAppNetworkAccessType,\nAppSecurityGroupManagement,\nAuthMode,\nCreationTime,\nDefaultSpaceSettings,\nDefaultUserSettings,\nDomainArn,\nDomainId,\nDomainName,\nDomainSettings,\nFailureReason,\nHomeEfsFileSystemId,\nHomeEfsFileSystemKmsKeyId,\nKmsKeyId,\nLastModifiedTime,\nSecurityGroupIdForDomainBoundary,\nSingleSignOnApplicationArn,\nSingleSignOnManagedApplicationInstanceId,\nStatus,\nSubnetIds,\nTagPropagation,\nUrl,\nVpcId\nFROM aws.sagemaker.domains\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(c.A,{value:"list_domains",children:[(0,s.jsx)(n.p,{children:"Lists the domains."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\nCreationTime,\nDomainArn,\nDomainId,\nDomainName,\nLastModifiedTime,\nStatus,\nUrl\nFROM aws.sagemaker.domains\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"insert-examples",children:[(0,s.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"create_domain",values:[{label:"create_domain",value:"create_domain"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(c.A,{value:"create_domain",children:[(0,s.jsx)(n.p,{children:"Creates a Domain. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other. EFS storage When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files. SageMaker AI uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see Protect Data at Rest Using Encryption. VPC configuration All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the AppNetworkAccessType parameter. AppNetworkAccessType corresponds to the network access type that you choose when you onboard to the domain. The following options are available: PublicInternetOnly - Non-EFS traffic goes through a VPC managed by Amazon SageMaker AI, which allows internet access. This is the default value. VpcOnly - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway. When internet access is disabled, you won't be able to run a Amazon SageMaker AI Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker AI API and runtime or a NAT gateway and your security groups allow outbound connections. NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker AI Studio app successfully. For more information, see Connect Amazon SageMaker AI Studio Notebooks to Resources in a VPC."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.domains (\nDomainName,\nAuthMode,\nDefaultUserSettings,\nDomainSettings,\nSubnetIds,\nVpcId,\nTags,\nAppNetworkAccessType,\nHomeEfsFileSystemKmsKeyId,\nKmsKeyId,\nAppSecurityGroupManagement,\nTagPropagation,\nDefaultSpaceSettings,\nregion\n)\nSELECT \n'{{ DomainName }}' /* required */,\n'{{ AuthMode }}' /* required */,\n'{{ DefaultUserSettings }}' /* required */,\n'{{ DomainSettings }}',\n'{{ SubnetIds }}',\n'{{ VpcId }}',\n'{{ Tags }}',\n'{{ AppNetworkAccessType }}',\n'{{ HomeEfsFileSystemKmsKeyId }}',\n'{{ KmsKeyId }}',\n'{{ AppSecurityGroupManagement }}',\n'{{ TagPropagation }}',\n'{{ DefaultSpaceSettings }}',\n'{{ region }}'\nRETURNING\nDomainArn,\nDomainId,\nUrl\n;\n"})})]}),(0,s.jsx)(c.A,{value:"manifest",children:(0,s.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: domains
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the domains resource.
  - name: DomainName
    value: "{{ DomainName }}"
    description: |
      A name for the domain.
  - name: AuthMode
    value: "{{ AuthMode }}"
    description: |
      The mode of authentication that members use to access the domain.
    valid_values: ['SSO', 'IAM']
  - name: DefaultUserSettings
    description: |
      The default settings to use to create a user profile when UserSettings isn't specified in the call to the CreateUserProfile API. SecurityGroups is aggregated when specified in both calls. For all other settings in UserSettings, the values specified in CreateUserProfile take precedence over those specified in CreateDomain.
    value:
      ExecutionRole: "{{ ExecutionRole }}"
      SecurityGroups:
        - "{{ SecurityGroups }}"
      SharingSettings:
        NotebookOutputOption: "{{ NotebookOutputOption }}"
        S3OutputPath: "{{ S3OutputPath }}"
        S3KmsKeyId: "{{ S3KmsKeyId }}"
      JupyterServerAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
        CodeRepositories:
          - RepositoryUrl: "{{ RepositoryUrl }}"
      KernelGatewayAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
      TensorBoardAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
      RStudioServerProAppSettings:
        AccessStatus: "{{ AccessStatus }}"
        UserGroup: "{{ UserGroup }}"
      RSessionAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
      CanvasAppSettings:
        TimeSeriesForecastingSettings:
          Status: "{{ Status }}"
          AmazonForecastRoleArn: "{{ AmazonForecastRoleArn }}"
        ModelRegisterSettings:
          Status: "{{ Status }}"
          CrossAccountModelRegisterRoleArn: "{{ CrossAccountModelRegisterRoleArn }}"
        WorkspaceSettings:
          S3ArtifactPath: "{{ S3ArtifactPath }}"
          S3KmsKeyId: "{{ S3KmsKeyId }}"
        IdentityProviderOAuthSettings:
          - DataSourceName: "{{ DataSourceName }}"
            Status: "{{ Status }}"
            SecretArn: "{{ SecretArn }}"
        DirectDeploySettings:
          Status: "{{ Status }}"
        KendraSettings:
          Status: "{{ Status }}"
        GenerativeAiSettings:
          AmazonBedrockRoleArn: "{{ AmazonBedrockRoleArn }}"
        EmrServerlessSettings:
          ExecutionRoleArn: "{{ ExecutionRoleArn }}"
          Status: "{{ Status }}"
      CodeEditorAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
        AppLifecycleManagement:
          IdleSettings:
            LifecycleManagement: "{{ LifecycleManagement }}"
            IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
            MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
            MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
        BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
      JupyterLabAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
        CodeRepositories:
          - RepositoryUrl: "{{ RepositoryUrl }}"
        AppLifecycleManagement:
          IdleSettings:
            LifecycleManagement: "{{ LifecycleManagement }}"
            IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
            MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
            MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
        EmrSettings:
          AssumableRoleArns:
            - "{{ AssumableRoleArns }}"
          ExecutionRoleArns:
            - "{{ ExecutionRoleArns }}"
        BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
      SpaceStorageSettings:
        DefaultEbsStorageSettings:
          DefaultEbsVolumeSizeInGb: {{ DefaultEbsVolumeSizeInGb }}
          MaximumEbsVolumeSizeInGb: {{ MaximumEbsVolumeSizeInGb }}
      DefaultLandingUri: "{{ DefaultLandingUri }}"
      StudioWebPortal: "{{ StudioWebPortal }}"
      CustomPosixUserConfig:
        Uid: {{ Uid }}
        Gid: {{ Gid }}
      CustomFileSystemConfigs:
        - EFSFileSystemConfig:
            FileSystemId: "{{ FileSystemId }}"
            FileSystemPath: "{{ FileSystemPath }}"
          FSxLustreFileSystemConfig:
            FileSystemId: "{{ FileSystemId }}"
            FileSystemPath: "{{ FileSystemPath }}"
          S3FileSystemConfig:
            MountPath: "{{ MountPath }}"
            S3Uri: "{{ S3Uri }}"
      StudioWebPortalSettings:
        HiddenMlTools:
          - "{{ HiddenMlTools }}"
        HiddenAppTypes:
          - "{{ HiddenAppTypes }}"
        HiddenInstanceTypes:
          - "{{ HiddenInstanceTypes }}"
        HiddenSageMakerImageVersionAliases:
          - SageMakerImageName: "{{ SageMakerImageName }}"
            VersionAliases: "{{ VersionAliases }}"
        ExecutionRoleSessionNameMode: "{{ ExecutionRoleSessionNameMode }}"
      AutoMountHomeEFS: "{{ AutoMountHomeEFS }}"
  - name: DomainSettings
    description: |
      A collection of Domain settings.
    value:
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
      RStudioServerProDomainSettings:
        DomainExecutionRoleArn: "{{ DomainExecutionRoleArn }}"
        RStudioConnectUrl: "{{ RStudioConnectUrl }}"
        RStudioPackageManagerUrl: "{{ RStudioPackageManagerUrl }}"
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
      ExecutionRoleIdentityConfig: "{{ ExecutionRoleIdentityConfig }}"
      TrustedIdentityPropagationSettings:
        Status: "{{ Status }}"
      DockerSettings:
        EnableDockerAccess: "{{ EnableDockerAccess }}"
        VpcOnlyTrustedAccounts:
          - "{{ VpcOnlyTrustedAccounts }}"
        RootlessDocker: "{{ RootlessDocker }}"
      AmazonQSettings:
        Status: "{{ Status }}"
        QProfileArn: "{{ QProfileArn }}"
      UnifiedStudioSettings:
        StudioWebPortalAccess: "{{ StudioWebPortalAccess }}"
        DomainAccountId: "{{ DomainAccountId }}"
        DomainRegion: "{{ DomainRegion }}"
        DomainId: "{{ DomainId }}"
        ProjectId: "{{ ProjectId }}"
        EnvironmentId: "{{ EnvironmentId }}"
        ProjectS3Path: "{{ ProjectS3Path }}"
        SingleSignOnApplicationArn: "{{ SingleSignOnApplicationArn }}"
      IpAddressType: "{{ IpAddressType }}"
  - name: SubnetIds
    value:
      - "{{ SubnetIds }}"
    description: |
      The VPC subnets that the domain uses for communication. The field is optional when the AppNetworkAccessType parameter is set to PublicInternetOnly for domains created from Amazon SageMaker Unified Studio.
  - name: VpcId
    value: "{{ VpcId }}"
    description: |
      The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication. The field is optional when the AppNetworkAccessType parameter is set to PublicInternetOnly for domains created from Amazon SageMaker Unified Studio.
  - name: Tags
    description: |
      Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. Tags that you specify for the Domain are also added to all Apps that the Domain launches.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: AppNetworkAccessType
    value: "{{ AppNetworkAccessType }}"
    description: |
      Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly. PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access VpcOnly - All traffic is through the specified VPC and subnets
    valid_values: ['PublicInternetOnly', 'VpcOnly']
  - name: HomeEfsFileSystemKmsKeyId
    value: "{{ HomeEfsFileSystemKmsKeyId }}"
    description: |
      Use KmsKeyId.
  - name: KmsKeyId
    value: "{{ KmsKeyId }}"
    description: |
      SageMaker AI uses Amazon Web Services KMS to encrypt EFS and EBS volumes attached to the domain with an Amazon Web Services managed key by default. For more control, specify a customer managed key.
  - name: AppSecurityGroupManagement
    value: "{{ AppSecurityGroupManagement }}"
    description: |
      The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. If setting up the domain for use with RStudio, this value must be set to Service.
    valid_values: ['Service', 'Customer']
  - name: TagPropagation
    value: "{{ TagPropagation }}"
    description: |
      Indicates whether custom tag propagation is supported for the domain. Defaults to DISABLED.
    valid_values: ['ENABLED', 'DISABLED']
  - name: DefaultSpaceSettings
    description: |
      The default settings for shared spaces that users create in the domain.
    value:
      ExecutionRole: "{{ ExecutionRole }}"
      SecurityGroups:
        - "{{ SecurityGroups }}"
      JupyterServerAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
        CodeRepositories:
          - RepositoryUrl: "{{ RepositoryUrl }}"
      KernelGatewayAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
      JupyterLabAppSettings:
        DefaultResourceSpec:
          SageMakerImageArn: "{{ SageMakerImageArn }}"
          SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
          SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
          InstanceType: "{{ InstanceType }}"
          LifecycleConfigArn: "{{ LifecycleConfigArn }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
        CustomImages:
          - ImageName: "{{ ImageName }}"
            ImageVersionNumber: {{ ImageVersionNumber }}
            AppImageConfigName: "{{ AppImageConfigName }}"
        LifecycleConfigArns:
          - "{{ LifecycleConfigArns }}"
        CodeRepositories:
          - RepositoryUrl: "{{ RepositoryUrl }}"
        AppLifecycleManagement:
          IdleSettings:
            LifecycleManagement: "{{ LifecycleManagement }}"
            IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
            MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
            MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
        EmrSettings:
          AssumableRoleArns:
            - "{{ AssumableRoleArns }}"
          ExecutionRoleArns:
            - "{{ ExecutionRoleArns }}"
        BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
      SpaceStorageSettings:
        DefaultEbsStorageSettings:
          DefaultEbsVolumeSizeInGb: {{ DefaultEbsVolumeSizeInGb }}
          MaximumEbsVolumeSizeInGb: {{ MaximumEbsVolumeSizeInGb }}
      CustomPosixUserConfig:
        Uid: {{ Uid }}
        Gid: {{ Gid }}
      CustomFileSystemConfigs:
        - EFSFileSystemConfig:
            FileSystemId: "{{ FileSystemId }}"
            FileSystemPath: "{{ FileSystemPath }}"
          FSxLustreFileSystemConfig:
            FileSystemId: "{{ FileSystemId }}"
            FileSystemPath: "{{ FileSystemPath }}"
          S3FileSystemConfig:
            MountPath: "{{ MountPath }}"
            S3Uri: "{{ S3Uri }}"
`})})]}),"\n",(0,s.jsxs)(n.h2,{id:"update-examples",children:[(0,s.jsx)(n.code,{children:"UPDATE"})," examples"]}),"\n",(0,s.jsx)(d.A,{defaultValue:"update_domain",values:[{label:"update_domain",value:"update_domain"}],children:(0,s.jsxs)(c.A,{value:"update_domain",children:[(0,s.jsx)(n.p,{children:"Updates the default settings for new user profiles in the domain."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE aws.sagemaker.domains\nSET \nDomainId = '{{ DomainId }}',\nDefaultUserSettings = '{{ DefaultUserSettings }}',\nDomainSettingsForUpdate = '{{ DomainSettingsForUpdate }}',\nAppSecurityGroupManagement = '{{ AppSecurityGroupManagement }}',\nDefaultSpaceSettings = '{{ DefaultSpaceSettings }}',\nSubnetIds = '{{ SubnetIds }}',\nAppNetworkAccessType = '{{ AppNetworkAccessType }}',\nTagPropagation = '{{ TagPropagation }}',\nVpcId = '{{ VpcId }}'\nWHERE \nregion = '{{ region }}' --required\nAND DomainId = '{{ DomainId }}' --required\nRETURNING\nDomainArn;\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"delete-examples",children:[(0,s.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsx)(d.A,{defaultValue:"delete_domain",values:[{label:"delete_domain",value:"delete_domain"}],children:(0,s.jsxs)(c.A,{value:"delete_domain",children:[(0,s.jsx)(n.p,{children:"Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.domains\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);