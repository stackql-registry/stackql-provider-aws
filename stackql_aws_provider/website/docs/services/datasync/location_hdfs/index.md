--- 
title: location_hdfs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_hdfs
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

Creates, updates, deletes, gets or lists a <code>location_hdfs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_hdfs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_hdfs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_hdfs"
    values={[
        { label: 'describe_location_hdfs', value: 'describe_location_hdfs' }
    ]}
>
<TabItem value="describe_location_hdfs">

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
    <td><CopyableCode code="AgentArns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the DataSync agents that can connect with your HDFS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationType" /></td>
    <td><code>string</code></td>
    <td>The type of authentication used to determine the identity of the user. (SIMPLE, KERBEROS)</td>
</tr>
<tr>
    <td><CopyableCode code="BlockSize" /></td>
    <td><code>integer</code></td>
    <td>The size of the data blocks to write into the HDFS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="CmkSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a KerberosKeytab that DataSync uses to access a specific storage location, with a customer-managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the HDFS location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a customer-managed secret, such as a KerberosKeytab that DataSync uses to access a specific storage location, with a customer-managed Identity and Access Management (IAM) role that provides access to the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="KerberosPrincipal" /></td>
    <td><code>string</code></td>
    <td>The Kerberos principal with access to the files and folders on the HDFS cluster. This parameter is used if the AuthenticationType is defined as KERBEROS. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyProviderUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the HDFS cluster's Key Management Server (KMS). (pattern: &lt;code&gt;^kms:\/\/http&#91;s&#93;?@((&#91;a-zA-Z0-9\-&#93;*&#91;a-zA-Z0-9&#93;)\.)*(&#91;A-Za-z0-9\-&#93;*&#91;A-Za-z0-9&#93;)(;((&#91;a-zA-Z0-9\-&#93;*&#91;a-zA-Z0-9&#93;)\.)*(&#91;A-Za-z0-9\-&#93;*&#91;A-Za-z0-9&#93;))*:&#91;0-9&#93;&#123;1,5&#125;\/kms$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the HDFS location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the HDFS location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a KerberosKeytab that DataSync uses to access a specific storage location. DataSync uses the default Amazon Web Services-managed KMS key to encrypt this secret in Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="NameNodes" /></td>
    <td><code>array</code></td>
    <td>The NameNode that manages the HDFS namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="QopConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Quality of Protection (QOP) configuration, which specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the HDFS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationFactor" /></td>
    <td><code>integer</code></td>
    <td>The number of DataNodes to replicate the data to when writing to the HDFS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SimpleUser" /></td>
    <td><code>string</code></td>
    <td>The user name to identify the client on the host operating system. This parameter is used if the AuthenticationType is defined as SIMPLE. (pattern: &lt;code&gt;^&#91;_.A-Za-z0-9&#93;&#91;-_.A-Za-z0-9&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_location_hdfs"><CopyableCode code="describe_location_hdfs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for a Hadoop Distributed File System (HDFS) is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_hdfs"><CopyableCode code="create_location_hdfs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NameNodes"><code>NameNodes</code></a>, <a href="#parameter-AuthenticationType"><code>AuthenticationType</code></a>, <a href="#parameter-AgentArns"><code>AgentArns</code></a></td>
    <td></td>
    <td>Creates a transfer location for a Hadoop Distributed File System (HDFS). DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses HDFS clusters.</td>
</tr>
<tr>
    <td><a href="#update_location_hdfs"><CopyableCode code="update_location_hdfs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Hadoop Distributed File System (HDFS) transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an HDFS cluster.</td>
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
    defaultValue="describe_location_hdfs"
    values={[
        { label: 'describe_location_hdfs', value: 'describe_location_hdfs' }
    ]}
>
<TabItem value="describe_location_hdfs">

Provides details about how an DataSync transfer location for a Hadoop Distributed File System (HDFS) is configured.

```sql
SELECT
AgentArns,
AuthenticationType,
BlockSize,
CmkSecretConfig,
CreationTime,
CustomSecretConfig,
KerberosPrincipal,
KmsKeyProviderUri,
LocationArn,
LocationUri,
ManagedSecretConfig,
NameNodes,
QopConfiguration,
ReplicationFactor,
SimpleUser
FROM aws.datasync.location_hdfs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_hdfs"
    values={[
        { label: 'create_location_hdfs', value: 'create_location_hdfs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_hdfs">

Creates a transfer location for a Hadoop Distributed File System (HDFS). DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses HDFS clusters.

```sql
INSERT INTO aws.datasync.location_hdfs (
Subdirectory,
NameNodes,
BlockSize,
ReplicationFactor,
KmsKeyProviderUri,
QopConfiguration,
AuthenticationType,
SimpleUser,
KerberosPrincipal,
KerberosKeytab,
KerberosKrb5Conf,
AgentArns,
Tags,
CmkSecretConfig,
CustomSecretConfig,
region
)
SELECT 
'{{ Subdirectory }}',
'{{ NameNodes }}' /* required */,
{{ BlockSize }},
{{ ReplicationFactor }},
'{{ KmsKeyProviderUri }}',
'{{ QopConfiguration }}',
'{{ AuthenticationType }}' /* required */,
'{{ SimpleUser }}',
'{{ KerberosPrincipal }}',
'{{ KerberosKeytab }}',
'{{ KerberosKrb5Conf }}',
'{{ AgentArns }}' /* required */,
'{{ Tags }}',
'{{ CmkSecretConfig }}',
'{{ CustomSecretConfig }}',
'{{ region }}'
RETURNING
LocationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_hdfs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_hdfs resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
    - name: NameNodes
      description: |
        The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.
      value:
        - Hostname: "{{ Hostname }}"
          Port: {{ Port }}
    - name: BlockSize
      value: {{ BlockSize }}
      description: |
        The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
    - name: ReplicationFactor
      value: {{ ReplicationFactor }}
      description: |
        The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.
    - name: KmsKeyProviderUri
      value: "{{ KmsKeyProviderUri }}"
      description: |
        The URI of the HDFS cluster's Key Management Server (KMS).
    - name: QopConfiguration
      description: |
        The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If QopConfiguration isn't specified, RpcProtection and DataTransferProtection default to PRIVACY. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value.
      value:
        RpcProtection: "{{ RpcProtection }}"
        DataTransferProtection: "{{ DataTransferProtection }}"
    - name: AuthenticationType
      value: "{{ AuthenticationType }}"
      description: |
        The type of authentication used to determine the identity of the user.
      valid_values: ['SIMPLE', 'KERBEROS']
    - name: SimpleUser
      value: "{{ SimpleUser }}"
      description: |
        The user name used to identify the client on the host operating system. If SIMPLE is specified for AuthenticationType, this parameter is required.
    - name: KerberosPrincipal
      value: "{{ KerberosPrincipal }}"
      description: |
        The Kerberos principal with access to the files and folders on the HDFS cluster. If KERBEROS is specified for AuthenticationType, this parameter is required.
    - name: KerberosKeytab
      value: "{{ KerberosKeytab }}"
      description: |
        The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If KERBEROS is specified for AuthenticationType, this parameter is required.
    - name: KerberosKrb5Conf
      value: "{{ KerberosKrb5Conf }}"
      description: |
        The krb5.conf file that contains the Kerberos configuration information. You can load the krb5.conf file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text. If KERBEROS is specified for AuthenticationType, this parameter is required.
    - name: AgentArns
      value:
        - "{{ AgentArns }}"
      description: |
        The Amazon Resource Names (ARNs) of the DataSync agents that can connect to your HDFS cluster.
    - name: Tags
      description: |
        The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CmkSecretConfig
      description: |
        Specifies configuration information for a DataSync-managed secret, which includes the Kerberos keytab that DataSync uses to access a specific Hadoop Distributed File System (HDFS) storage location, with a customer-managed KMS key. When you include this parameter as part of a CreateLocationHdfs request, you provide only the KMS key ARN. DataSync uses this KMS key together with the KerberosKeytab you specify for to create a DataSync-managed secret to store the location access credentials. Make sure that DataSync has permission to access the KMS key that you specify. For more information, see Using a service-managed secret encrypted with a custom KMS key. You can use either CmkSecretConfig (with KerberosKeytab) or CustomSecretConfig (without KerberosKeytab) to provide credentials for a CreateLocationHdfs request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: CustomSecretConfig
      description: |
        Specifies configuration information for a customer-managed Secrets Manager secret where the Kerberos keytab for the HDFS storage location is stored in binary, in Secrets Manager. This configuration includes the secret ARN, and the ARN for an IAM role that provides access to the secret. For more information, see Using a secret that you manage. You can use either CmkSecretConfig (with KerberosKeytab) or CustomSecretConfig (without KerberosKeytab) to provide credentials for a CreateLocationHdfs request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_hdfs"
    values={[
        { label: 'update_location_hdfs', value: 'update_location_hdfs' }
    ]}
>
<TabItem value="update_location_hdfs">

Modifies the following configuration parameters of the Hadoop Distributed File System (HDFS) transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an HDFS cluster.

```sql
UPDATE aws.datasync.location_hdfs
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
NameNodes = '{{ NameNodes }}',
BlockSize = {{ BlockSize }},
ReplicationFactor = {{ ReplicationFactor }},
KmsKeyProviderUri = '{{ KmsKeyProviderUri }}',
QopConfiguration = '{{ QopConfiguration }}',
AuthenticationType = '{{ AuthenticationType }}',
SimpleUser = '{{ SimpleUser }}',
KerberosPrincipal = '{{ KerberosPrincipal }}',
KerberosKeytab = '{{ KerberosKeytab }}',
KerberosKrb5Conf = '{{ KerberosKrb5Conf }}',
AgentArns = '{{ AgentArns }}',
CmkSecretConfig = '{{ CmkSecretConfig }}',
CustomSecretConfig = '{{ CustomSecretConfig }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
