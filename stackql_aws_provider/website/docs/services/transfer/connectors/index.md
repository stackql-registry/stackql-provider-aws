--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="describe_connector">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the connector. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="as_2_config" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the parameters for an AS2 connector object.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the connector. (pattern: &lt;code&gt;c-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="egress_config" /></td>
    <td><code>object</code></td>
    <td>Current egress configuration of the connector, showing how traffic is routed to the SFTP server. Contains VPC Lattice settings when using VPC_LATTICE egress type. When using the VPC_LATTICE egress type, Transfer Family uses a managed Service Network to simplify the resource sharing process.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_type" /></td>
    <td><code>string</code></td>
    <td>Type of egress configuration for the connector. SERVICE_MANAGED uses Transfer Family managed NAT gateways, while VPC_LATTICE routes traffic through customer VPCs using VPC Lattice. (SERVICE_MANAGED, VPC_LATTICE)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message providing details when the connector is in ERRORED status. Contains information to help troubleshoot connector creation or operation failures.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>IP address type for the connector's network connections. When set to IPV4, the connector uses IPv4 addresses only. When set to DUALSTACK, the connector supports both IPv4 and IPv6 addresses, with IPv6 preferred when available. (IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs. (pattern: &lt;code&gt;arn:.*role/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_policy_name" /></td>
    <td><code>string</code></td>
    <td>The text name of the security policy for the specified connector. (pattern: &lt;code&gt;TransferSFTPConnectorSecurityPolicy-&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_managed_egress_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="sftp_config" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the parameters for an SFTP connector object.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the connector. PENDING indicates creation/update in progress, ACTIVE means ready for operations, and ERRORED indicates a failure requiring attention. (ACTIVE, ERRORED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL of the partner's AS2 or SFTP endpoint. When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified connector. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the connector. (pattern: &lt;code&gt;c-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL of the partner's AS2 or SFTP endpoint. When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.</td>
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
    <td><a href="#describe_connector"><CopyableCode code="describe_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the connector that's identified by the ConnectorId.</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the connectors for the specified Region.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessRole"><code>AccessRole</code></a></td>
    <td></td>
    <td>Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see Configure AS2 connectors and Create SFTP connectors. You must specify exactly one configuration object: either for AS2 (As2Config) or SFTP (SftpConfig).</td>
</tr>
<tr>
    <td><a href="#update_connector"><CopyableCode code="update_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a></td>
    <td></td>
    <td>Updates some of the parameters for an existing connector. Provide the ConnectorId for the connector that you want to update, along with the new values for the parameters to update.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the connector that's specified in the provided ConnectorId.</td>
</tr>
<tr>
    <td><a href="#start_directory_listing"><CopyableCode code="start_directory_listing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a>, <a href="#parameter-RemoteDirectoryPath"><code>RemoteDirectoryPath</code></a>, <a href="#parameter-OutputDirectoryPath"><code>OutputDirectoryPath</code></a></td>
    <td></td>
    <td>Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional MaxItems value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep. After you receive the listing file, you can provide the files that you want to transfer to the RetrieveFilePaths parameter of the StartFileTransfer API call. The naming convention for the output file is connector-ID-listing-ID.json. The output file contains the following information: filePath: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server. modifiedTimestamp: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing. size: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing. path: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server. truncated: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your Truncated output value is true, you can increase the value provided in the optional max-items input attribute to be able to list more items (up to the maximum allowed list size of 200,000 items).</td>
</tr>
<tr>
    <td><a href="#start_file_transfer"><CopyableCode code="start_file_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a></td>
    <td></td>
    <td>Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server. For an AS2 connector, you specify the ConnectorId and one or more SendFilePaths to identify the files you want to transfer. For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the ConnectorId. Depending on the direction of the transfer, you also specify the following items: If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more RetrieveFilePaths to identify the files you want to transfer, and a LocalDirectoryPath to specify the destination folder. If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more SendFilePaths to identify the files you want to transfer, and a RemoteDirectoryPath to specify the destination folder.</td>
</tr>
<tr>
    <td><a href="#start_remote_delete"><CopyableCode code="start_remote_delete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a>, <a href="#parameter-DeletePath"><code>DeletePath</code></a></td>
    <td></td>
    <td>Deletes a file or directory on the remote SFTP server.</td>
</tr>
<tr>
    <td><a href="#start_remote_move"><CopyableCode code="start_remote_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a>, <a href="#parameter-SourcePath"><code>SourcePath</code></a>, <a href="#parameter-TargetPath"><code>TargetPath</code></a></td>
    <td></td>
    <td>Moves or renames a file or directory on the remote SFTP server.</td>
</tr>
<tr>
    <td><a href="#test_connection"><CopyableCode code="test_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a></td>
    <td></td>
    <td>Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server.</td>
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
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="describe_connector">

Describes the connector that's identified by the ConnectorId.

```sql
SELECT
access_role,
arn,
as_2_config,
connector_id,
egress_config,
egress_type,
error_message,
ip_address_type,
logging_role,
security_policy_name,
service_managed_egress_ip_addresses,
sftp_config,
status,
tags,
url
FROM aws.transfer.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connectors">

Lists the connectors for the specified Region.

```sql
SELECT
arn,
connector_id,
url
FROM aws.transfer.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see Configure AS2 connectors and Create SFTP connectors. You must specify exactly one configuration object: either for AS2 (As2Config) or SFTP (SftpConfig).

```sql
INSERT INTO aws.transfer.connectors (
Url,
As2Config,
AccessRole,
LoggingRole,
Tags,
SftpConfig,
SecurityPolicyName,
EgressConfig,
IpAddressType,
region
)
SELECT 
'{{ Url }}',
'{{ As2Config }}',
'{{ AccessRole }}' /* required */,
'{{ LoggingRole }}',
'{{ Tags }}',
'{{ SftpConfig }}',
'{{ SecurityPolicyName }}',
'{{ EgressConfig }}',
'{{ IpAddressType }}',
'{{ region }}'
RETURNING
connector_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: Url
      value: "{{ Url }}"
      description: |
        The URL of the partner's AS2 or SFTP endpoint. When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.
    - name: As2Config
      description: |
        A structure that contains the parameters for an AS2 connector object.
      value:
        LocalProfileId: "{{ LocalProfileId }}"
        PartnerProfileId: "{{ PartnerProfileId }}"
        MessageSubject: "{{ MessageSubject }}"
        Compression: "{{ Compression }}"
        EncryptionAlgorithm: "{{ EncryptionAlgorithm }}"
        SigningAlgorithm: "{{ SigningAlgorithm }}"
        MdnSigningAlgorithm: "{{ MdnSigningAlgorithm }}"
        MdnResponse: "{{ MdnResponse }}"
        BasicAuthSecretId: "{{ BasicAuthSecretId }}"
        PreserveContentType: "{{ PreserveContentType }}"
        AsyncMdnConfig:
          Url: "{{ Url }}"
          ServerIds:
            - "{{ ServerIds }}"
    - name: AccessRole
      value: "{{ AccessRole }}"
      description: |
        Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use. For AS2 connectors With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file’s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key. For SFTP connectors Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager.
    - name: LoggingRole
      value: "{{ LoggingRole }}"
      description: |
        The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SftpConfig
      description: |
        A structure that contains the parameters for an SFTP connector object.
      value:
        UserSecretId: "{{ UserSecretId }}"
        TrustedHostKeys:
          - "{{ TrustedHostKeys }}"
        MaxConcurrentConnections: {{ MaxConcurrentConnections }}
    - name: SecurityPolicyName
      value: "{{ SecurityPolicyName }}"
      description: |
        Specifies the name of the security policy for the connector.
    - name: EgressConfig
      description: |
        Specifies the egress configuration for the connector, which determines how traffic is routed from the connector to the SFTP server. When set to VPC, enables routing through customer VPCs using VPC_LATTICE for private connectivity.
      value:
        VpcLattice:
          ResourceConfigurationArn: "{{ ResourceConfigurationArn }}"
          PortNumber: {{ PortNumber }}
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        Specifies the IP address type for the connector's network connections. When set to IPV4, the connector uses IPv4 addresses only. When set to DUALSTACK, the connector supports both IPv4 and IPv6 addresses, with IPv6 preferred when available.
      valid_values: ['IPV4', 'DUALSTACK']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector"
    values={[
        { label: 'update_connector', value: 'update_connector' }
    ]}
>
<TabItem value="update_connector">

Updates some of the parameters for an existing connector. Provide the ConnectorId for the connector that you want to update, along with the new values for the parameters to update.

```sql
UPDATE aws.transfer.connectors
SET 
ConnectorId = '{{ ConnectorId }}',
Url = '{{ Url }}',
As2Config = '{{ As2Config }}',
AccessRole = '{{ AccessRole }}',
LoggingRole = '{{ LoggingRole }}',
SftpConfig = '{{ SftpConfig }}',
SecurityPolicyName = '{{ SecurityPolicyName }}',
EgressConfig = '{{ EgressConfig }}',
IpAddressType = '{{ IpAddressType }}'
WHERE 
region = '{{ region }}' --required
AND ConnectorId = '{{ ConnectorId }}' --required
RETURNING
connector_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes the connector that's specified in the provided ConnectorId.

```sql
DELETE FROM aws.transfer.connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_directory_listing"
    values={[
        { label: 'start_directory_listing', value: 'start_directory_listing' },
        { label: 'start_file_transfer', value: 'start_file_transfer' },
        { label: 'start_remote_delete', value: 'start_remote_delete' },
        { label: 'start_remote_move', value: 'start_remote_move' },
        { label: 'test_connection', value: 'test_connection' }
    ]}
>
<TabItem value="start_directory_listing">

Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional MaxItems value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep. After you receive the listing file, you can provide the files that you want to transfer to the RetrieveFilePaths parameter of the StartFileTransfer API call. The naming convention for the output file is connector-ID-listing-ID.json. The output file contains the following information: filePath: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server. modifiedTimestamp: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing. size: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing. path: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server. truncated: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your Truncated output value is true, you can increase the value provided in the optional max-items input attribute to be able to list more items (up to the maximum allowed list size of 200,000 items).

```sql
EXEC aws.transfer.connectors.start_directory_listing 
@region='{{ region }}' --required 
@@json=
'{
"ConnectorId": "{{ ConnectorId }}", 
"RemoteDirectoryPath": "{{ RemoteDirectoryPath }}", 
"MaxItems": {{ MaxItems }}, 
"OutputDirectoryPath": "{{ OutputDirectoryPath }}"
}'
;
```
</TabItem>
<TabItem value="start_file_transfer">

Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server. For an AS2 connector, you specify the ConnectorId and one or more SendFilePaths to identify the files you want to transfer. For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the ConnectorId. Depending on the direction of the transfer, you also specify the following items: If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more RetrieveFilePaths to identify the files you want to transfer, and a LocalDirectoryPath to specify the destination folder. If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more SendFilePaths to identify the files you want to transfer, and a RemoteDirectoryPath to specify the destination folder.

```sql
EXEC aws.transfer.connectors.start_file_transfer 
@region='{{ region }}' --required 
@@json=
'{
"ConnectorId": "{{ ConnectorId }}", 
"SendFilePaths": "{{ SendFilePaths }}", 
"RetrieveFilePaths": "{{ RetrieveFilePaths }}", 
"LocalDirectoryPath": "{{ LocalDirectoryPath }}", 
"RemoteDirectoryPath": "{{ RemoteDirectoryPath }}", 
"CustomHttpHeaders": "{{ CustomHttpHeaders }}"
}'
;
```
</TabItem>
<TabItem value="start_remote_delete">

Deletes a file or directory on the remote SFTP server.

```sql
EXEC aws.transfer.connectors.start_remote_delete 
@region='{{ region }}' --required 
@@json=
'{
"ConnectorId": "{{ ConnectorId }}", 
"DeletePath": "{{ DeletePath }}"
}'
;
```
</TabItem>
<TabItem value="start_remote_move">

Moves or renames a file or directory on the remote SFTP server.

```sql
EXEC aws.transfer.connectors.start_remote_move 
@region='{{ region }}' --required 
@@json=
'{
"ConnectorId": "{{ ConnectorId }}", 
"SourcePath": "{{ SourcePath }}", 
"TargetPath": "{{ TargetPath }}"
}'
;
```
</TabItem>
<TabItem value="test_connection">

Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server.

```sql
EXEC aws.transfer.connectors.test_connection 
@region='{{ region }}' --required 
@@json=
'{
"ConnectorId": "{{ ConnectorId }}"
}'
;
```
</TabItem>
</Tabs>
