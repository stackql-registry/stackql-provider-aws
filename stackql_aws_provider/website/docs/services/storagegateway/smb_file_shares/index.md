--- 
title: smb_file_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - smb_file_shares
  - storagegateway
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>smb_file_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="smb_file_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.smb_file_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_smb_file_shares"
    values={[
        { label: 'describe_smb_file_shares', value: 'describe_smb_file_shares' }
    ]}
>
<TabItem value="describe_smb_file_shares">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="smb_file_share_info_list" /></td>
    <td><code>array</code></td>
    <td>An array containing a description for each requested file share.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_smb_file_shares"><CopyableCode code="describe_smb_file_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.</td>
</tr>
<tr>
    <td><a href="#create_smb_file_share"><CopyableCode code="create_smb_file_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-LocationARN"><code>LocationARN</code></a></td>
    <td></td>
    <td>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.</td>
</tr>
<tr>
    <td><a href="#update_smb_file_share_visibility"><CopyableCode code="update_smb_file_share_visibility" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-FileSharesVisible"><code>FileSharesVisible</code></a></td>
    <td></td>
    <td>Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.</td>
</tr>
<tr>
    <td><a href="#update_smb_file_share"><CopyableCode code="update_smb_file_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileShareARN"><code>FileShareARN</code></a></td>
    <td></td>
    <td>Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_smb_file_shares"
    values={[
        { label: 'describe_smb_file_shares', value: 'describe_smb_file_shares' }
    ]}
>
<TabItem value="describe_smb_file_shares">

Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.

```sql
SELECT
smb_file_share_info_list
FROM aws.storagegateway.smb_file_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_smb_file_share"
    values={[
        { label: 'create_smb_file_share', value: 'create_smb_file_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_smb_file_share">

Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

```sql
INSERT INTO aws.storagegateway.smb_file_shares (
ClientToken,
GatewayARN,
EncryptionType,
KMSEncrypted,
KMSKey,
Role,
LocationARN,
DefaultStorageClass,
ObjectACL,
ReadOnly,
GuessMIMETypeEnabled,
RequesterPays,
SMBACLEnabled,
AccessBasedEnumeration,
AdminUserList,
ValidUserList,
InvalidUserList,
AuditDestinationARN,
Authentication,
CaseSensitivity,
Tags,
FileShareName,
CacheAttributes,
NotificationPolicy,
VPCEndpointDNSName,
BucketRegion,
OplocksEnabled,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ GatewayARN }}' /* required */,
'{{ EncryptionType }}',
{{ KMSEncrypted }},
'{{ KMSKey }}',
'{{ Role }}' /* required */,
'{{ LocationARN }}' /* required */,
'{{ DefaultStorageClass }}',
'{{ ObjectACL }}',
{{ ReadOnly }},
{{ GuessMIMETypeEnabled }},
{{ RequesterPays }},
{{ SMBACLEnabled }},
{{ AccessBasedEnumeration }},
'{{ AdminUserList }}',
'{{ ValidUserList }}',
'{{ InvalidUserList }}',
'{{ AuditDestinationARN }}',
'{{ Authentication }}',
'{{ CaseSensitivity }}',
'{{ Tags }}',
'{{ FileShareName }}',
'{{ CacheAttributes }}',
'{{ NotificationPolicy }}',
'{{ VPCEndpointDNSName }}',
'{{ BucketRegion }}',
{{ OplocksEnabled }},
'{{ region }}'
RETURNING
file_share_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: smb_file_shares
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the smb_file_shares resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.
    - name: GatewayARN
      value: "{{ GatewayARN }}"
      description: |
        The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    - name: EncryptionType
      value: "{{ EncryptionType }}"
      description: |
        A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do not need to provide values for both parameters. If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true.
      valid_values: ['SseS3', 'SseKms', 'DsseKms']
    - name: KMSEncrypted
      value: {{ KMSEncrypted }}
      description: |
        Optional. Set to true to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or false to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the EncryptionType parameter instead. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do not need to provide values for both parameters. If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true. Valid Values: true | false
    - name: KMSKey
      value: "{{ KMSKey }}"
      description: |
        Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if KMSEncrypted is true, or if EncryptionType is SseKms or DsseKms.
    - name: Role
      value: "{{ Role }}"
      description: |
        The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.
    - name: LocationARN
      value: "{{ LocationARN }}"
      description: |
        A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/). You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples. Bucket ARN: arn:aws:s3:::amzn-s3-demo-bucket/prefix/ Access point ARN: arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/ If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see Delegating access control to access points in the Amazon S3 User Guide. Access point alias: test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias
    - name: DefaultStorageClass
      value: "{{ DefaultStorageClass }}"
      description: |
        The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING | S3_STANDARD_IA | S3_ONEZONE_IA
    - name: ObjectACL
      value: "{{ ObjectACL }}"
      description: |
        A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is private.
      valid_values: ['private', 'public-read', 'public-read-write', 'authenticated-read', 'bucket-owner-read', 'bucket-owner-full-control', 'aws-exec-read']
    - name: ReadOnly
      value: {{ ReadOnly }}
      description: |
        A value that sets the write status of a file share. Set this value to true to set the write status to read-only, otherwise set to false. Valid Values: true | false
    - name: GuessMIMETypeEnabled
      value: {{ GuessMIMETypeEnabled }}
      description: |
        A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, otherwise set to false. The default value is true. Valid Values: true | false
    - name: RequesterPays
      value: {{ RequesterPays }}
      description: |
        A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data. RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. Valid Values: true | false
    - name: SMBACLEnabled
      value: {{ SMBACLEnabled }}
      description: |
        Set this value to true to enable access control list (ACL) on the SMB file share. Set it to false to map file and directory permissions to the POSIX permissions. For more information, see Using Windows ACLs to limit SMB file share access in the Amazon S3 File Gateway User Guide. Valid Values: true | false
    - name: AccessBasedEnumeration
      value: {{ AccessBasedEnumeration }}
      description: |
        The files and folders on this share will only be visible to users with read access.
    - name: AdminUserList
      value:
        - "{{ AdminUserList }}"
      description: |
        A list of users or groups in the Active Directory that will be granted administrator privileges on the file share. These users can do all file operations as the super-user. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Use this option very carefully, because any user in this list can do anything they like on the file share, regardless of file permissions.
    - name: ValidUserList
      value:
        - "{{ ValidUserList }}"
      description: |
        A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Can only be set if Authentication is set to ActiveDirectory.
    - name: InvalidUserList
      value:
        - "{{ InvalidUserList }}"
      description: |
        A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Can only be set if Authentication is set to ActiveDirectory.
    - name: AuditDestinationARN
      value: "{{ AuditDestinationARN }}"
      description: |
        The Amazon Resource Name (ARN) of the storage used for audit logs.
    - name: Authentication
      value: "{{ Authentication }}"
      description: |
        The authentication method that users use to access the file share. The default is ActiveDirectory. Valid Values: ActiveDirectory | GuestAccess
    - name: CaseSensitivity
      value: "{{ CaseSensitivity }}"
      description: |
        The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the case sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default value is ClientSpecified.
      valid_values: ['ClientSpecified', 'CaseSensitive']
    - name: Tags
      description: |
        A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: FileShareName
      value: "{{ FileShareName }}"
      description: |
        The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or if an access point or access point alias is used. A valid SMB file share name cannot contain the following characters: [,],#,;,<,>,:,",\,/,|,?,*,+, or ASCII control characters 1-31.
    - name: CacheAttributes
      description: |
        The refresh cache information for the file share or FSx file systems.
      value:
        CacheStaleTimeoutInSeconds: {{ CacheStaleTimeoutInSeconds }}
    - name: NotificationPolicy
      value: "{{ NotificationPolicy }}"
      description: |
        The notification policy of the file share. SettlingTimeInSeconds controls the number of seconds to wait after the last point in time a client wrote to a file before generating an ObjectUploaded notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period. SettlingTimeInSeconds has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification. This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications. The following example sets NotificationPolicy on with SettlingTimeInSeconds set to 60. {\"Upload\": {\"SettlingTimeInSeconds\": 60}} The following example sets NotificationPolicy off. {}
    - name: VPCEndpointDNSName
      value: "{{ VPCEndpointDNSName }}"
      description: |
        Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3. This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
    - name: BucketRegion
      value: "{{ BucketRegion }}"
      description: |
        Specifies the Region of the S3 bucket where the SMB file share stores files. This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
    - name: OplocksEnabled
      value: {{ OplocksEnabled }}
      description: |
        Specifies whether opportunistic locking is enabled for the SMB file share. Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case. Valid Values: true | false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_smb_file_share_visibility"
    values={[
        { label: 'update_smb_file_share_visibility', value: 'update_smb_file_share_visibility' },
        { label: 'update_smb_file_share', value: 'update_smb_file_share' }
    ]}
>
<TabItem value="update_smb_file_share_visibility">

Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.

```sql
UPDATE aws.storagegateway.smb_file_shares
SET 
GatewayARN = '{{ GatewayARN }}',
FileSharesVisible = {{ FileSharesVisible }}
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND FileSharesVisible = {{ FileSharesVisible }} --required
RETURNING
gateway_arn;
```
</TabItem>
<TabItem value="update_smb_file_share">

Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

```sql
UPDATE aws.storagegateway.smb_file_shares
SET 
FileShareARN = '{{ FileShareARN }}',
EncryptionType = '{{ EncryptionType }}',
KMSEncrypted = {{ KMSEncrypted }},
KMSKey = '{{ KMSKey }}',
DefaultStorageClass = '{{ DefaultStorageClass }}',
ObjectACL = '{{ ObjectACL }}',
ReadOnly = {{ ReadOnly }},
GuessMIMETypeEnabled = {{ GuessMIMETypeEnabled }},
RequesterPays = {{ RequesterPays }},
SMBACLEnabled = {{ SMBACLEnabled }},
AccessBasedEnumeration = {{ AccessBasedEnumeration }},
AdminUserList = '{{ AdminUserList }}',
ValidUserList = '{{ ValidUserList }}',
InvalidUserList = '{{ InvalidUserList }}',
AuditDestinationARN = '{{ AuditDestinationARN }}',
CaseSensitivity = '{{ CaseSensitivity }}',
FileShareName = '{{ FileShareName }}',
CacheAttributes = '{{ CacheAttributes }}',
NotificationPolicy = '{{ NotificationPolicy }}',
OplocksEnabled = {{ OplocksEnabled }}
WHERE 
region = '{{ region }}' --required
AND FileShareARN = '{{ FileShareARN }}' --required
RETURNING
file_share_arn;
```
</TabItem>
</Tabs>
