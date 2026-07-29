--- 
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
  - transfer
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

Creates, updates, deletes, gets or lists an <code>agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.agreements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agreement"
    values={[
        { label: 'describe_agreement', value: 'describe_agreement' },
        { label: 'list_agreements', value: 'list_agreements' }
    ]}
>
<TabItem value="describe_agreement">

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
    <td><CopyableCode code="access_role" /></td>
    <td><code>string</code></td>
    <td>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use. For AS2 connectors With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file’s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key. For SFTP connectors Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager. (pattern: &lt;code&gt;arn:.*role/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the agreement. This identifier is returned when you create an agreement. (pattern: &lt;code&gt;a-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the agreement. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="base_directory" /></td>
    <td><code>string</code></td>
    <td>The landing directory (folder) for files that are transferred by using the AS2 protocol. (pattern: &lt;code&gt;(|/.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_directories" /></td>
    <td><code>object</code></td>
    <td>A CustomDirectoriesType structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files. Failed files MDN files Payload files Status files Temporary files</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The name or short description that's used to identify the agreement. (pattern: &lt;code&gt;&#91;\u0021-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enforce_message_signing" /></td>
    <td><code>string</code></td>
    <td>Determines whether or not unsigned messages from your trading partners will be accepted. ENABLED: Transfer Family rejects unsigned messages from your trading partner. DISABLED (default value): Transfer Family accepts unsigned messages from your trading partner. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="local_profile_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the AS2 local profile. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="partner_profile_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the partner profile used in the agreement. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preserve_filename" /></td>
    <td><code>string</code></td>
    <td>Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it. ENABLED: the filename provided by your trading parter is preserved when the file is saved. DISABLED (default value): when Transfer Family saves the file, the filename is adjusted, as described in File names and locations. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>string</code></td>
    <td>A system-assigned unique identifier for a server instance. This identifier indicates the specific server that the agreement uses. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agreement, either ACTIVE or INACTIVE. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for agreements.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agreements">

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
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the agreement. This identifier is returned when you create an agreement. (pattern: &lt;code&gt;a-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified agreement. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The current description for the agreement. You can change it by calling the UpdateAgreement operation and providing a new description. (pattern: &lt;code&gt;&#91;\u0021-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="local_profile_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the AS2 local profile. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="partner_profile_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the partner profile. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agreement. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The agreement can be either ACTIVE or INACTIVE. (ACTIVE, INACTIVE)</td>
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
    <td><a href="#describe_agreement"><CopyableCode code="describe_agreement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the agreement that's identified by the AgreementId.</td>
</tr>
<tr>
    <td><a href="#list_agreements"><CopyableCode code="list_agreements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the agreements for the server that's identified by the ServerId that you supply. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing agreements from where you left off.</td>
</tr>
<tr>
    <td><a href="#create_agreement"><CopyableCode code="create_agreement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-LocalProfileId"><code>LocalProfileId</code></a>, <a href="#parameter-PartnerProfileId"><code>PartnerProfileId</code></a>, <a href="#parameter-AccessRole"><code>AccessRole</code></a></td>
    <td></td>
    <td>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes. The partner is identified with the PartnerProfileId, and the AS2 process is identified with the LocalProfileId. Specify either BaseDirectory or CustomDirectories, but not both. Specifying both causes the command to fail.</td>
</tr>
<tr>
    <td><a href="#update_agreement"><CopyableCode code="update_agreement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AgreementId"><code>AgreementId</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a></td>
    <td></td>
    <td>Updates some of the parameters for an existing agreement. Provide the AgreementId and the ServerId for the agreement that you want to update, along with the new values for the parameters to update. Specify either BaseDirectory or CustomDirectories, but not both. Specifying both causes the command to fail. If you update an agreement from using base directory to custom directories, the base directory is no longer used. Similarly, if you change from custom directories to a base directory, the custom directories are no longer used.</td>
</tr>
<tr>
    <td><a href="#delete_agreement"><CopyableCode code="delete_agreement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the agreement that's specified in the provided AgreementId.</td>
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
    defaultValue="describe_agreement"
    values={[
        { label: 'describe_agreement', value: 'describe_agreement' },
        { label: 'list_agreements', value: 'list_agreements' }
    ]}
>
<TabItem value="describe_agreement">

Describes the agreement that's identified by the AgreementId.

```sql
SELECT
access_role,
agreement_id,
arn,
base_directory,
custom_directories,
description,
enforce_message_signing,
local_profile_id,
partner_profile_id,
preserve_filename,
server_id,
status,
tags
FROM aws.transfer.agreements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agreements">

Returns a list of the agreements for the server that's identified by the ServerId that you supply. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing agreements from where you left off.

```sql
SELECT
agreement_id,
arn,
description,
local_profile_id,
partner_profile_id,
server_id,
status
FROM aws.transfer.agreements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agreement"
    values={[
        { label: 'create_agreement', value: 'create_agreement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agreement">

Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes. The partner is identified with the PartnerProfileId, and the AS2 process is identified with the LocalProfileId. Specify either BaseDirectory or CustomDirectories, but not both. Specifying both causes the command to fail.

```sql
INSERT INTO aws.transfer.agreements (
Description,
ServerId,
LocalProfileId,
PartnerProfileId,
BaseDirectory,
AccessRole,
Status,
Tags,
PreserveFilename,
EnforceMessageSigning,
CustomDirectories,
region
)
SELECT 
'{{ Description }}',
'{{ ServerId }}' /* required */,
'{{ LocalProfileId }}' /* required */,
'{{ PartnerProfileId }}' /* required */,
'{{ BaseDirectory }}',
'{{ AccessRole }}' /* required */,
'{{ Status }}',
'{{ Tags }}',
'{{ PreserveFilename }}',
'{{ EnforceMessageSigning }}',
'{{ CustomDirectories }}',
'{{ region }}'
RETURNING
agreement_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agreements
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agreements resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        A name or short description to identify the agreement.
    - name: ServerId
      value: "{{ ServerId }}"
      description: |
        A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.
    - name: LocalProfileId
      value: "{{ LocalProfileId }}"
      description: |
        A unique identifier for the AS2 local profile.
    - name: PartnerProfileId
      value: "{{ PartnerProfileId }}"
      description: |
        A unique identifier for the partner profile used in the agreement.
    - name: BaseDirectory
      value: "{{ BaseDirectory }}"
      description: |
        The landing directory (folder) for files transferred by using the AS2 protocol. A BaseDirectory example is /amzn-s3-demo-bucket/home/mydirectory.
    - name: AccessRole
      value: "{{ AccessRole }}"
      description: |
        Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use. For AS2 connectors With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file’s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key. For SFTP connectors Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager.
    - name: Status
      value: "{{ Status }}"
      description: |
        The status of the agreement. The agreement can be either ACTIVE or INACTIVE.
      valid_values: ['ACTIVE', 'INACTIVE']
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for agreements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: PreserveFilename
      value: "{{ PreserveFilename }}"
      description: |
        Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it. ENABLED: the filename provided by your trading parter is preserved when the file is saved. DISABLED (default value): when Transfer Family saves the file, the filename is adjusted, as described in File names and locations.
      valid_values: ['ENABLED', 'DISABLED']
    - name: EnforceMessageSigning
      value: "{{ EnforceMessageSigning }}"
      description: |
        Determines whether or not unsigned messages from your trading partners will be accepted. ENABLED: Transfer Family rejects unsigned messages from your trading partner. DISABLED (default value): Transfer Family accepts unsigned messages from your trading partner.
      valid_values: ['ENABLED', 'DISABLED']
    - name: CustomDirectories
      description: |
        A CustomDirectoriesType structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files. Failed files MDN files Payload files Status files Temporary files
      value:
        FailedFilesDirectory: "{{ FailedFilesDirectory }}"
        MdnFilesDirectory: "{{ MdnFilesDirectory }}"
        PayloadFilesDirectory: "{{ PayloadFilesDirectory }}"
        StatusFilesDirectory: "{{ StatusFilesDirectory }}"
        TemporaryFilesDirectory: "{{ TemporaryFilesDirectory }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agreement"
    values={[
        { label: 'update_agreement', value: 'update_agreement' }
    ]}
>
<TabItem value="update_agreement">

Updates some of the parameters for an existing agreement. Provide the AgreementId and the ServerId for the agreement that you want to update, along with the new values for the parameters to update. Specify either BaseDirectory or CustomDirectories, but not both. Specifying both causes the command to fail. If you update an agreement from using base directory to custom directories, the base directory is no longer used. Similarly, if you change from custom directories to a base directory, the custom directories are no longer used.

```sql
UPDATE aws.transfer.agreements
SET 
AgreementId = '{{ AgreementId }}',
ServerId = '{{ ServerId }}',
Description = '{{ Description }}',
Status = '{{ Status }}',
LocalProfileId = '{{ LocalProfileId }}',
PartnerProfileId = '{{ PartnerProfileId }}',
BaseDirectory = '{{ BaseDirectory }}',
AccessRole = '{{ AccessRole }}',
PreserveFilename = '{{ PreserveFilename }}',
EnforceMessageSigning = '{{ EnforceMessageSigning }}',
CustomDirectories = '{{ CustomDirectories }}'
WHERE 
region = '{{ region }}' --required
AND AgreementId = '{{ AgreementId }}' --required
AND ServerId = '{{ ServerId }}' --required
RETURNING
agreement_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agreement"
    values={[
        { label: 'delete_agreement', value: 'delete_agreement' }
    ]}
>
<TabItem value="delete_agreement">

Delete the agreement that's specified in the provided AgreementId.

```sql
DELETE FROM aws.transfer.agreements
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
