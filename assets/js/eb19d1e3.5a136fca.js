"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["208962"],{571019(e,r,s){s.r(r),s.d(r,{metadata:()=>i,default:()=>g,frontMatter:()=>c,contentTitle:()=>h,toc:()=>m,assets:()=>u});var i=JSON.parse('{"id":"services/sagemaker/user_profiles/index","title":"user_profiles","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/sagemaker/user_profiles/index.md","sourceDirName":"services/sagemaker/user_profiles","slug":"/services/sagemaker/user_profiles/","permalink":"/services/sagemaker/user_profiles/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"user_profiles","hide_title":false,"hide_table_of_contents":false,"keywords":["user_profiles","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"ultra_servers_by_reserved_capacities","permalink":"/services/sagemaker/ultra_servers_by_reserved_capacities/"},"next":{"title":"workforces","permalink":"/services/sagemaker/workforces/"}}'),n=s(474848),a=s(28453),t=s(97362),o=s(897272),l=s(413554),d=s(541647);let c={title:"user_profiles",hide_title:!1,hide_table_of_contents:!1,keywords:["user_profiles","sagemaker","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function p(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"user_profiles"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"user_profiles"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"aws.sagemaker.user_profiles"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_user_profile",values:[{label:"describe_user_profile",value:"describe_user_profile"},{label:"list_user_profiles",value:"list_user_profiles"}],children:[(0,n.jsx)(d.A,{value:"describe_user_profile",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The creation time."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"DomainId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: <code>d-(-*[a-z0-9]){1,61}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"FailureReason"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The failure reason."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"HomeEfsFileSystemUid"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ID of the user's profile in the Amazon Elastic File System volume. (pattern: <code>\\d+</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"LastModifiedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last modified time."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"SingleSignOnUserIdentifier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The IAM Identity Center user identifier. (pattern: <code>UserName</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"SingleSignOnUserValue"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The IAM Identity Center user value."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"Status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"UserProfileArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The user profile Amazon Resource Name (ARN). (pattern: <code>arn",":aws","[a-z-]",(0,n.jsx)(r.em,{children:":sagemaker:[a-z0-9-]"}),":[0-9]{12}",":user-profile","/.*</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"UserProfileName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The user profile name. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"UserSettings"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A collection of settings."})]})]})]})}),(0,n.jsx)(d.A,{value:"list_user_profiles",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The creation time."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"DomainId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: <code>d-(-*[a-z0-9]){1,61}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"LastModifiedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last modified time."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"Status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"UserProfileName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The user profile name. (pattern: <code>[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}</code>)"})]})]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_user_profile",children:(0,n.jsx)(t.A,{code:"describe_user_profile"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Describes a user profile. For more information, see CreateUserProfile."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_user_profiles",children:(0,n.jsx)(t.A,{code:"list_user_profiles"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Lists user profiles."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_user_profile",children:(0,n.jsx)(t.A,{code:"create_user_profile"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DomainId",children:(0,n.jsx)("code",{children:"DomainId"})}),", ",(0,n.jsx)("a",{href:"#parameter-UserProfileName",children:(0,n.jsx)("code",{children:"UserProfileName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:'Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to a domain. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user\'s private Amazon Elastic File System home directory.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_user_profile",children:(0,n.jsx)(t.A,{code:"update_user_profile"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DomainId",children:(0,n.jsx)("code",{children:"DomainId"})}),", ",(0,n.jsx)("a",{href:"#parameter-UserProfileName",children:(0,n.jsx)("code",{children:"UserProfileName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a user profile."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_user_profile",children:(0,n.jsx)(t.A,{code:"delete_user_profile"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_presigned_domain_url",children:(0,n.jsx)(t.A,{code:"create_presigned_domain_url"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"exec"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DomainId",children:(0,n.jsx)("code",{children:"DomainId"})}),", ",(0,n.jsx)("a",{href:"#parameter-UserProfileName",children:(0,n.jsx)("code",{children:"UserProfileName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to the domain, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System volume. This operation can only be called when the authentication mode equals IAM. The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app. You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see Connect to Amazon SageMaker AI Studio Through an Interface VPC Endpoint . The URL that you get from a call to CreatePresignedDomainUrl has a default timeout of 5 minutes. You can configure this value using ExpiresInSeconds. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page. The JupyterLab session default expiration time is 12 hours. You can configure this value using SessionExpirationDurationInSeconds."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_user_profile",values:[{label:"describe_user_profile",value:"describe_user_profile"},{label:"list_user_profiles",value:"list_user_profiles"}],children:[(0,n.jsxs)(d.A,{value:"describe_user_profile",children:[(0,n.jsx)(r.p,{children:"Describes a user profile. For more information, see CreateUserProfile."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nCreationTime,\nDomainId,\nFailureReason,\nHomeEfsFileSystemUid,\nLastModifiedTime,\nSingleSignOnUserIdentifier,\nSingleSignOnUserValue,\nStatus,\nUserProfileArn,\nUserProfileName,\nUserSettings\nFROM aws.sagemaker.user_profiles\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(d.A,{value:"list_user_profiles",children:[(0,n.jsx)(r.p,{children:"Lists user profiles."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nCreationTime,\nDomainId,\nLastModifiedTime,\nStatus,\nUserProfileName\nFROM aws.sagemaker.user_profiles\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_user_profile",values:[{label:"create_user_profile",value:"create_user_profile"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_user_profile",children:[(0,n.jsx)(r.p,{children:'Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to a domain. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user\'s private Amazon Elastic File System home directory.'}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.sagemaker.user_profiles (\nDomainId,\nUserProfileName,\nSingleSignOnUserIdentifier,\nSingleSignOnUserValue,\nTags,\nUserSettings,\nregion\n)\nSELECT \n'{{ DomainId }}' /* required */,\n'{{ UserProfileName }}' /* required */,\n'{{ SingleSignOnUserIdentifier }}',\n'{{ SingleSignOnUserValue }}',\n'{{ Tags }}',\n'{{ UserSettings }}',\n'{{ region }}'\nRETURNING\nUserProfileArn\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: user_profiles
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the user_profiles resource.
  - name: DomainId
    value: "{{ DomainId }}"
    description: |
      Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel.
  - name: UserProfileName
    value: "{{ UserProfileName }}"
    description: |
      A name for the UserProfile. This value is not case sensitive.
  - name: SingleSignOnUserIdentifier
    value: "{{ SingleSignOnUserIdentifier }}"
    description: |
      A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
  - name: SingleSignOnUserValue
    value: "{{ SingleSignOnUserValue }}"
    description: |
      The username of the associated Amazon Web Services Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
  - name: Tags
    description: |
      Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags that you specify for the User Profile are also added to all Apps that the User Profile launches.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: UserSettings
    description: |
      A collection of settings.
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
`})})]}),"\n",(0,n.jsxs)(r.h2,{id:"update-examples",children:[(0,n.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"update_user_profile",values:[{label:"update_user_profile",value:"update_user_profile"}],children:(0,n.jsxs)(d.A,{value:"update_user_profile",children:[(0,n.jsx)(r.p,{children:"Updates a user profile."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.sagemaker.user_profiles\nSET \nDomainId = '{{ DomainId }}',\nUserProfileName = '{{ UserProfileName }}',\nUserSettings = '{{ UserSettings }}'\nWHERE \nregion = '{{ region }}' --required\nAND DomainId = '{{ DomainId }}' --required\nAND UserProfileName = '{{ UserProfileName }}' --required\nRETURNING\nUserProfileArn;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"delete-examples",children:[(0,n.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"delete_user_profile",values:[{label:"delete_user_profile",value:"delete_user_profile"}],children:(0,n.jsxs)(d.A,{value:"delete_user_profile",children:[(0,n.jsx)(r.p,{children:"Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.sagemaker.user_profiles\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,n.jsx)(r.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,n.jsx)(l.A,{defaultValue:"create_presigned_domain_url",values:[{label:"create_presigned_domain_url",value:"create_presigned_domain_url"}],children:(0,n.jsxs)(d.A,{value:"create_presigned_domain_url",children:[(0,n.jsx)(r.p,{children:"Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to the domain, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System volume. This operation can only be called when the authentication mode equals IAM. The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app. You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see Connect to Amazon SageMaker AI Studio Through an Interface VPC Endpoint . The URL that you get from a call to CreatePresignedDomainUrl has a default timeout of 5 minutes. You can configure this value using ExpiresInSeconds. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page. The JupyterLab session default expiration time is 12 hours. You can configure this value using SessionExpirationDurationInSeconds."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'EXEC aws.sagemaker.user_profiles.create_presigned_domain_url \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"DomainId": "{{ DomainId }}", \n"UserProfileName": "{{ UserProfileName }}", \n"SessionExpirationDurationInSeconds": {{ SessionExpirationDurationInSeconds }}, \n"ExpiresInSeconds": {{ ExpiresInSeconds }}, \n"SpaceName": "{{ SpaceName }}", \n"LandingUri": "{{ LandingUri }}"\n}\'\n;\n'})})]})})]})}function g(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);