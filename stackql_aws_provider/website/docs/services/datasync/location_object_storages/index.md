--- 
title: location_object_storages
hide_title: false
hide_table_of_contents: false
keywords:
  - location_object_storages
  - datasync
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

Creates, updates, deletes, gets or lists a <code>location_object_storages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_object_storages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_object_storages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_object_storage"
    values={[
        { label: 'describe_location_object_storage', value: 'describe_location_object_storage' }
    ]}
>
<TabItem value="describe_location_object_storage">

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
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>The access key (for example, a user name) required to authenticate with the object storage system. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the DataSync agents that can connect with your object storage system.</td>
</tr>
<tr>
    <td><CopyableCode code="cmk_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed Identity and Access Management (IAM) role that provides access to the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the object storage system location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the object storage system location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default Amazon Web Services-managed KMS key to encrypt this secret in Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate" /></td>
    <td><code>string (byte)</code></td>
    <td>The certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA).</td>
</tr>
<tr>
    <td><CopyableCode code="server_port" /></td>
    <td><code>integer</code></td>
    <td>The port that your object storage server accepts inbound network traffic on (for example, port 443).</td>
</tr>
<tr>
    <td><CopyableCode code="server_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol that your object storage system uses to communicate. (HTTPS, HTTP)</td>
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
    <td><a href="#describe_location_object_storage"><CopyableCode code="describe_location_object_storage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an object storage system is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_object_storage"><CopyableCode code="create_location_object_storage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerHostname"><code>ServerHostname</code></a>, <a href="#parameter-BucketName"><code>BucketName</code></a></td>
    <td></td>
    <td>Creates a transfer location for an object storage system. DataSync can use this location as a source or destination for transferring data. You can make transfers with or without a DataSync agent. Before you begin, make sure that you understand the prerequisites for DataSync to work with object storage systems.</td>
</tr>
<tr>
    <td><a href="#update_location_object_storage"><CopyableCode code="update_location_object_storage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the object storage transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an object storage system.</td>
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
    defaultValue="describe_location_object_storage"
    values={[
        { label: 'describe_location_object_storage', value: 'describe_location_object_storage' }
    ]}
>
<TabItem value="describe_location_object_storage">

Provides details about how an DataSync transfer location for an object storage system is configured.

```sql
SELECT
access_key,
agent_arns,
cmk_secret_config,
creation_time,
custom_secret_config,
location_arn,
location_uri,
managed_secret_config,
server_certificate,
server_port,
server_protocol
FROM aws.datasync.location_object_storages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_object_storage"
    values={[
        { label: 'create_location_object_storage', value: 'create_location_object_storage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_object_storage">

Creates a transfer location for an object storage system. DataSync can use this location as a source or destination for transferring data. You can make transfers with or without a DataSync agent. Before you begin, make sure that you understand the prerequisites for DataSync to work with object storage systems.

```sql
INSERT INTO aws.datasync.location_object_storages (
ServerHostname,
ServerPort,
ServerProtocol,
Subdirectory,
BucketName,
AccessKey,
SecretKey,
AgentArns,
Tags,
ServerCertificate,
CmkSecretConfig,
CustomSecretConfig,
region
)
SELECT 
'{{ ServerHostname }}' /* required */,
{{ ServerPort }},
'{{ ServerProtocol }}',
'{{ Subdirectory }}',
'{{ BucketName }}' /* required */,
'{{ AccessKey }}',
'{{ SecretKey }}',
'{{ AgentArns }}',
'{{ Tags }}',
'{{ ServerCertificate }}',
'{{ CmkSecretConfig }}',
'{{ CustomSecretConfig }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_object_storages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_object_storages resource.
    - name: ServerHostname
      value: "{{ ServerHostname }}"
      description: |
        Specifies the domain name or IP address (IPv4 or IPv6) of the object storage server that your DataSync agent connects to.
    - name: ServerPort
      value: {{ ServerPort }}
      description: |
        Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).
    - name: ServerProtocol
      value: "{{ ServerProtocol }}"
      description: |
        Specifies the protocol that your object storage server uses to communicate. If not specified, the default value is HTTPS.
      valid_values: ['HTTPS', 'HTTP']
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix.
    - name: BucketName
      value: "{{ BucketName }}"
      description: |
        Specifies the name of the object storage bucket involved in the transfer.
    - name: AccessKey
      value: "{{ AccessKey }}"
      description: |
        Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.
    - name: SecretKey
      value: "{{ SecretKey }}"
      description: |
        Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server. If you provide a secret using SecretKey, but do not provide secret configuration details using CmkSecretConfig or CustomSecretConfig, then DataSync stores the token using your Amazon Web Services account's Secrets Manager secret.
    - name: AgentArns
      value:
        - "{{ AgentArns }}"
      description: |
        (Optional) Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter. Make sure you configure this parameter correctly when you first create your storage location. You cannot add or remove agents from a storage location after you create it.
    - name: Tags
      description: |
        Specifies the key-value pair that represents a tag that you want to add to the resource. Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ServerCertificate
      value: "{{ ServerCertificate }}"
      description: |
        Specifies a certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA). You must specify a single .pem file with a full certificate chain (for example, file:///home/user/.ssh/object_storage_certificates.pem). The certificate chain might include: The object storage system's certificate All intermediate certificates (if there are any) The root certificate of the signing CA You can concatenate your certificates into a .pem file (which can be up to 32768 bytes before base64 encoding). The following example cat command creates an object_storage_certificates.pem file that includes three certificates: cat object_server_certificate.pem intermediate_certificate.pem ca_root_certificate.pem > object_storage_certificates.pem To use this parameter, configure ServerProtocol to HTTPS.
    - name: CmkSecretConfig
      description: |
        Specifies configuration information for a DataSync-managed secret, which includes the SecretKey that DataSync uses to access a specific object storage location, with a customer-managed KMS key. When you include this parameter as part of a CreateLocationObjectStorage request, you provide only the KMS key ARN. DataSync uses this KMS key together with the value you specify for the SecretKey parameter to create a DataSync-managed secret to store the location access credentials. Make sure that DataSync has permission to access the KMS key that you specify. For more information, see Using a service-managed secret encrypted with a custom KMS key. You can use either CmkSecretConfig (with SecretKey) or CustomSecretConfig (without SecretKey) to provide credentials for a CreateLocationObjectStorage request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: CustomSecretConfig
      description: |
        Specifies configuration information for a customer-managed Secrets Manager secret where the secret key for a specific object storage location is stored in plain text, in Secrets Manager. This configuration includes the secret ARN, and the ARN for an IAM role that provides access to the secret. For more information, see Using a secret that you manage. You can use either CmkSecretConfig (with SecretKey) or CustomSecretConfig (without SecretKey) to provide credentials for a CreateLocationObjectStorage request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_object_storage"
    values={[
        { label: 'update_location_object_storage', value: 'update_location_object_storage' }
    ]}
>
<TabItem value="update_location_object_storage">

Modifies the following configuration parameters of the object storage transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an object storage system.

```sql
UPDATE aws.datasync.location_object_storages
SET 
LocationArn = '{{ LocationArn }}',
ServerPort = {{ ServerPort }},
ServerProtocol = '{{ ServerProtocol }}',
Subdirectory = '{{ Subdirectory }}',
ServerHostname = '{{ ServerHostname }}',
AccessKey = '{{ AccessKey }}',
SecretKey = '{{ SecretKey }}',
AgentArns = '{{ AgentArns }}',
ServerCertificate = '{{ ServerCertificate }}',
CmkSecretConfig = '{{ CmkSecretConfig }}',
CustomSecretConfig = '{{ CustomSecretConfig }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
