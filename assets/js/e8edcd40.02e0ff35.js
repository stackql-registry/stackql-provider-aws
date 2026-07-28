"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["114131"],{247617(e,t,a){a.r(t),a.d(t,{metadata:()=>s,default:()=>f,frontMatter:()=>d,contentTitle:()=>u,toc:()=>p,assets:()=>h});var s=JSON.parse('{"id":"services/fsx/backups/index","title":"backups","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/fsx/backups/index.md","sourceDirName":"services/fsx/backups","slug":"/services/fsx/backups/","permalink":"/services/fsx/backups/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"backups","hide_title":false,"hide_table_of_contents":false,"keywords":["backups","fsx","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"and_delete_s3_access_points","permalink":"/services/fsx/and_delete_s3_access_points/"},"next":{"title":"data_repository_associations","permalink":"/services/fsx/data_repository_associations/"}}'),i=a(474848),n=a(28453),r=a(97362),o=a(897272),c=a(413554),l=a(541647);let d={title:"backups",hide_title:!1,hide_table_of_contents:!1,keywords:["backups","fsx","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"backups"})," resource."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"backups"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"aws.fsx.backups"})})]})]})}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are returned by ",(0,i.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"describe_backups",values:[{label:"describe_backups",value:"describe_backups"}],children:(0,i.jsx)(l.A,{value:"describe_backups",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"BackupId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The ID of the backup. (pattern: <code>^(backup-[0-9a-f]{8,})$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"CreationTime"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The time when a particular backup was created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"DirectoryInformation"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The configuration of the self-managed Microsoft Active Directory directory to which the Windows File Server instance is joined."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"FailureDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Details explaining any failures that occurred when creating a backup."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"FileSystem"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"KmsKeyId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference. (pattern: <code>^.{1,2048}$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"Lifecycle"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The lifecycle status of the backup. AVAILABLE - The backup is fully available. PENDING - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup. CREATING - Amazon FSx is creating the backup. TRANSFERRING - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3. COPYING - Amazon FSx is copying the backup. DELETED - Amazon FSx deleted the backup and it's no longer available. FAILED - Amazon FSx couldn't finish the backup. (AVAILABLE, CREATING, TRANSFERRING, DELETED, FAILED, PENDING, COPYING)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"OwnerId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources. (pattern: <code>^\\d{12}$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ProgressPercent"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Displays the current percent of progress of an asynchronous task."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ResourceARN"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) for the backup resource. (pattern: <code>^arn:(?=[^:]+:fsx:[^:]+:\\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\\d{1,3}(.\\d{1,3}){3})(?![^:]",(0,i.jsx)(t.em,{children:"-{2})(?![^:]"}),"-.)(?![^:]",(0,i.jsx)(t.em,{children:".-)[a-z0-9]."}),"(?<!-)):){4}(?!/).{0,1024}$</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"ResourceType"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the resource type that's backed up. (FILE_SYSTEM, VOLUME)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"SizeInBytes"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer (int64)"})}),(0,i.jsx)("td",{children:"The size of the backup in bytes. This represents the amount of data that the file system would contain if you restore this backup."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"SourceBackupId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The ID of the source backup. Specifies the backup that you are copying. (pattern: <code>^(backup-[0-9a-f]{8,})$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"SourceBackupRegion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The source Region of the backup. Specifies the Region from where this backup is copied. (pattern: <code>^[a-z0-9-]{1,20}$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"Tags"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of Tag values, with a maximum of 50 elements."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"Type"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The type of the file-system backup. (AUTOMATIC, USER_INITIATED, AWS_BACKUP)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"Volume"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Describes an Amazon FSx volume."})]})]})]})})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#describe_backups",children:(0,i.jsx)(r.A,{code:"describe_backups"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value. The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_file_system_from_backup",children:(0,i.jsx)(r.A,{code:"create_file_system_from_backup"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-BackupId",children:(0,i.jsx)("code",{children:"BackupId"})}),", ",(0,i.jsx)("a",{href:"#parameter-SubnetIds",children:(0,i.jsx)("code",{children:"SubnetIds"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following: Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system. Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same. The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_volume_from_backup",children:(0,i.jsx)(r.A,{code:"create_volume_from_backup"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-BackupId",children:(0,i.jsx)("code",{children:"BackupId"})}),", ",(0,i.jsx)("a",{href:"#parameter-Name",children:(0,i.jsx)("code",{children:"Name"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_backup",children:(0,i.jsx)(r.A,{code:"create_backup"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"insert"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration: A Persistent deployment type Are not linked to a data repository For more information about backups, see the following: For Amazon FSx for Lustre, see Working with FSx for Lustre backups. For Amazon FSx for Windows, see Working with FSx for Windows backups. For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups. For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups. If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following: Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the backup. By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_backup",children:(0,i.jsx)(r.A,{code:"delete_backup"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls. The data in a deleted backup is also deleted and can't be recovered by any means."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,i.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(t.h2,{id:"select-examples",children:[(0,i.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"describe_backups",values:[{label:"describe_backups",value:"describe_backups"}],children:(0,i.jsxs)(l.A,{value:"describe_backups",children:[(0,i.jsx)(t.p,{children:"Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind: The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value. The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nBackupId,\nCreationTime,\nDirectoryInformation,\nFailureDetails,\nFileSystem,\nKmsKeyId,\nLifecycle,\nOwnerId,\nProgressPercent,\nResourceARN,\nResourceType,\nSizeInBytes,\nSourceBackupId,\nSourceBackupRegion,\nTags,\nType,\nVolume\nFROM aws.fsx.backups\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,i.jsxs)(t.h2,{id:"insert-examples",children:[(0,i.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(c.A,{defaultValue:"create_file_system_from_backup",values:[{label:"create_file_system_from_backup",value:"create_file_system_from_backup"},{label:"create_volume_from_backup",value:"create_volume_from_backup"},{label:"create_backup",value:"create_backup"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(l.A,{value:"create_file_system_from_backup",children:[(0,i.jsx)(t.p,{children:"Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following: Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the file system. Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same. The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.fsx.backups (\nBackupId,\nClientRequestToken,\nSubnetIds,\nSecurityGroupIds,\nTags,\nWindowsConfiguration,\nLustreConfiguration,\nStorageType,\nKmsKeyId,\nFileSystemTypeVersion,\nOpenZFSConfiguration,\nStorageCapacity,\nNetworkType,\nregion\n)\nSELECT \n'{{ BackupId }}' /* required */,\n'{{ ClientRequestToken }}',\n'{{ SubnetIds }}' /* required */,\n'{{ SecurityGroupIds }}',\n'{{ Tags }}',\n'{{ WindowsConfiguration }}',\n'{{ LustreConfiguration }}',\n'{{ StorageType }}',\n'{{ KmsKeyId }}',\n'{{ FileSystemTypeVersion }}',\n'{{ OpenZFSConfiguration }}',\n{{ StorageCapacity }},\n'{{ NetworkType }}',\n'{{ region }}'\nRETURNING\nFileSystem\n;\n"})})]}),(0,i.jsxs)(l.A,{value:"create_volume_from_backup",children:[(0,i.jsx)(t.p,{children:"Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.fsx.backups (\nBackupId,\nClientRequestToken,\nName,\nOntapConfiguration,\nTags,\nregion\n)\nSELECT \n'{{ BackupId }}' /* required */,\n'{{ ClientRequestToken }}',\n'{{ Name }}' /* required */,\n'{{ OntapConfiguration }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nVolume\n;\n"})})]}),(0,i.jsxs)(l.A,{value:"create_backup",children:[(0,i.jsx)(t.p,{children:"Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration: A Persistent deployment type Are not linked to a data repository For more information about backups, see the following: For Amazon FSx for Lustre, see Working with FSx for Lustre backups. For Amazon FSx for Windows, see Working with FSx for Windows backups. For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups. For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups. If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following: Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the backup. By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.fsx.backups (\nFileSystemId,\nClientRequestToken,\nTags,\nVolumeId,\nregion\n)\nSELECT \n'{{ FileSystemId }}',\n'{{ ClientRequestToken }}',\n'{{ Tags }}',\n'{{ VolumeId }}',\n'{{ region }}'\nRETURNING\nBackup\n;\n"})})]}),(0,i.jsx)(l.A,{value:"manifest",children:(0,i.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: backups
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the backups resource.
  - name: BackupId
    value: "{{ BackupId }}"
    description: |
      The ID of the source backup. Specifies the backup that you are copying.
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
    description: |
      (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
  - name: SubnetIds
    value:
      - "{{ SubnetIds }}"
    description: |
      A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the CreateFileCache operation.
  - name: SecurityGroupIds
    value:
      - "{{ SecurityGroupIds }}"
    description: |
      A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later DescribeFileSystem requests.
  - name: Tags
    description: |
      A list of Tag values, with a maximum of 50 elements.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: WindowsConfiguration
    description: |
      The configuration for this Microsoft Windows file system.
    value:
      ActiveDirectoryId: "{{ ActiveDirectoryId }}"
      SelfManagedActiveDirectoryConfiguration:
        DomainName: "{{ DomainName }}"
        OrganizationalUnitDistinguishedName: "{{ OrganizationalUnitDistinguishedName }}"
        FileSystemAdministratorsGroup: "{{ FileSystemAdministratorsGroup }}"
        UserName: "{{ UserName }}"
        Password: "{{ Password }}"
        DnsIps:
          - "{{ DnsIps }}"
        DomainJoinServiceAccountSecret: "{{ DomainJoinServiceAccountSecret }}"
      DeploymentType: "{{ DeploymentType }}"
      PreferredSubnetId: "{{ PreferredSubnetId }}"
      ThroughputCapacity: {{ ThroughputCapacity }}
      WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
      DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
      AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
      CopyTagsToBackups: {{ CopyTagsToBackups }}
      Aliases:
        - "{{ Aliases }}"
      AuditLogConfiguration:
        FileAccessAuditLogLevel: "{{ FileAccessAuditLogLevel }}"
        FileShareAccessAuditLogLevel: "{{ FileShareAccessAuditLogLevel }}"
        AuditLogDestination: "{{ AuditLogDestination }}"
      DiskIopsConfiguration:
        Mode: "{{ Mode }}"
        Iops: {{ Iops }}
      FsrmConfiguration:
        FsrmServiceEnabled: {{ FsrmServiceEnabled }}
        EventLogDestination: "{{ EventLogDestination }}"
  - name: LustreConfiguration
    description: |
      The Lustre configuration for the file system being created. The following parameters are not supported for file systems with a data repository association created with . AutoImportPolicy ExportPath ImportedFileChunkSize ImportPath
    value:
      WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
      ImportPath: "{{ ImportPath }}"
      ExportPath: "{{ ExportPath }}"
      ImportedFileChunkSize: {{ ImportedFileChunkSize }}
      DeploymentType: "{{ DeploymentType }}"
      AutoImportPolicy: "{{ AutoImportPolicy }}"
      PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
      DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
      AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
      CopyTagsToBackups: {{ CopyTagsToBackups }}
      DriveCacheType: "{{ DriveCacheType }}"
      DataCompressionType: "{{ DataCompressionType }}"
      EfaEnabled: {{ EfaEnabled }}
      LogConfiguration:
        Level: "{{ Level }}"
        Destination: "{{ Destination }}"
      RootSquashConfiguration:
        RootSquash: "{{ RootSquash }}"
        NoSquashNids:
          - "{{ NoSquashNids }}"
      MetadataConfiguration:
        Iops: {{ Iops }}
        Mode: "{{ Mode }}"
      ThroughputCapacity: {{ ThroughputCapacity }}
      DataReadCacheConfiguration:
        SizingMode: "{{ SizingMode }}"
        SizeGiB: {{ SizeGiB }}
  - name: StorageType
    value: "{{ StorageType }}"
    description: |
      Sets the storage type for the Windows, OpenZFS, or Lustre file system that you're creating from a backup. Valid values are SSD, HDD, and INTELLIGENT_TIERING. Set to SSD to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types. Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 FSx for Windows File Server file system deployment types. Set to INTELLIGENT_TIERING to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type and for Lustre file systems with the Persistent_2 deployment type. The default value is SSD. HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB.
    valid_values: ['SSD', 'HDD', 'INTELLIGENT_TIERING']
  - name: KmsKeyId
    value: "{{ KmsKeyId }}"
    description: |
      Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference.
  - name: FileSystemTypeVersion
    value: "{{ FileSystemTypeVersion }}"
    description: |
      Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are 2.10, 2.12, and 2.15. You can enter a Lustre version that is newer than the backup's FileSystemTypeVersion setting. If you don't enter a newer Lustre version, it defaults to the backup's setting.
  - name: OpenZFSConfiguration
    description: |
      The OpenZFS configuration for the file system that's being created.
    value:
      AutomaticBackupRetentionDays: {{ AutomaticBackupRetentionDays }}
      CopyTagsToBackups: {{ CopyTagsToBackups }}
      CopyTagsToVolumes: {{ CopyTagsToVolumes }}
      DailyAutomaticBackupStartTime: "{{ DailyAutomaticBackupStartTime }}"
      DeploymentType: "{{ DeploymentType }}"
      ThroughputCapacity: {{ ThroughputCapacity }}
      WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
      DiskIopsConfiguration:
        Mode: "{{ Mode }}"
        Iops: {{ Iops }}
      RootVolumeConfiguration:
        RecordSizeKiB: {{ RecordSizeKiB }}
        DataCompressionType: "{{ DataCompressionType }}"
        NfsExports:
          - ClientConfigurations: "{{ ClientConfigurations }}"
        UserAndGroupQuotas:
          - Type: "{{ Type }}"
            Id: {{ Id }}
            StorageCapacityQuotaGiB: {{ StorageCapacityQuotaGiB }}
        CopyTagsToSnapshots: {{ CopyTagsToSnapshots }}
        ReadOnly: {{ ReadOnly }}
      PreferredSubnetId: "{{ PreferredSubnetId }}"
      EndpointIpAddressRange: "{{ EndpointIpAddressRange }}"
      EndpointIpv6AddressRange: "{{ EndpointIpv6AddressRange }}"
      RouteTableIds:
        - "{{ RouteTableIds }}"
      ReadCacheConfiguration:
        SizingMode: "{{ SizingMode }}"
        SizeGiB: {{ SizeGiB }}
  - name: StorageCapacity
    value: {{ StorageCapacity }}
    description: |
      Sets the storage capacity of the OpenZFS file system that you're creating from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB (512 TiB). However, the value that you specify must be equal to or greater than the backup's storage capacity value. If you don't use the StorageCapacity parameter, the default is the backup's StorageCapacity value. If used to create a file system other than OpenZFS, you must provide a value that matches the backup's StorageCapacity value. If you provide any other value, Amazon FSx responds with an HTTP status code 400 Bad Request.
  - name: NetworkType
    value: "{{ NetworkType }}"
    description: |
      Sets the network type for the Amazon FSx for OpenZFS file system that you're creating from a backup.
    valid_values: ['IPV4', 'DUAL']
  - name: Name
    value: "{{ Name }}"
    description: |
      The name of the new volume you're creating.
  - name: OntapConfiguration
    description: |
      Specifies the configuration of the ONTAP volume that you are creating.
    value:
      JunctionPath: "{{ JunctionPath }}"
      SecurityStyle: "{{ SecurityStyle }}"
      SizeInMegabytes: {{ SizeInMegabytes }}
      StorageEfficiencyEnabled: {{ StorageEfficiencyEnabled }}
      StorageVirtualMachineId: "{{ StorageVirtualMachineId }}"
      TieringPolicy:
        CoolingPeriod: {{ CoolingPeriod }}
        Name: "{{ Name }}"
      OntapVolumeType: "{{ OntapVolumeType }}"
      SnapshotPolicy: "{{ SnapshotPolicy }}"
      CopyTagsToBackups: {{ CopyTagsToBackups }}
      SnaplockConfiguration:
        AuditLogVolume: {{ AuditLogVolume }}
        AutocommitPeriod:
          Type: "{{ Type }}"
          Value: {{ Value }}
        PrivilegedDelete: "{{ PrivilegedDelete }}"
        RetentionPeriod:
          DefaultRetention:
            Type: "{{ Type }}"
            Value: {{ Value }}
          MinimumRetention:
            Type: "{{ Type }}"
            Value: {{ Value }}
          MaximumRetention:
            Type: "{{ Type }}"
            Value: {{ Value }}
        SnaplockType: "{{ SnaplockType }}"
        VolumeAppendModeEnabled: {{ VolumeAppendModeEnabled }}
      VolumeStyle: "{{ VolumeStyle }}"
      AggregateConfiguration:
        Aggregates:
          - "{{ Aggregates }}"
        ConstituentsPerAggregate: {{ ConstituentsPerAggregate }}
      SizeInBytes: {{ SizeInBytes }}
  - name: FileSystemId
    value: "{{ FileSystemId }}"
    description: |
      The globally unique ID of the file system, assigned by Amazon FSx.
  - name: VolumeId
    value: "{{ VolumeId }}"
    description: |
      (Optional) The ID of the FSx for ONTAP volume to back up.
`})})]}),"\n",(0,i.jsxs)(t.h2,{id:"delete-examples",children:[(0,i.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"delete_backup",values:[{label:"delete_backup",value:"delete_backup"}],children:(0,i.jsxs)(l.A,{value:"delete_backup",children:[(0,i.jsx)(t.p,{children:"Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls. The data in a deleted backup is also deleted and can't be recovered by any means."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.fsx.backups\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function f(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);