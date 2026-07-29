--- 
title: location_smbs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_smbs
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

Creates, updates, deletes, gets or lists a <code>location_smbs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_smbs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_smbs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_smb"
    values={[
        { label: 'describe_location_smb', value: 'describe_location_smb' }
    ]}
>
<TabItem value="describe_location_smb">

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
    <td><CopyableCode code="agent_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the DataSync agents that can connect with your SMB file server.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_type" /></td>
    <td><code>string</code></td>
    <td>The authentication protocol that DataSync uses to connect to your SMB file server. (NTLM, KERBEROS)</td>
</tr>
<tr>
    <td><CopyableCode code="cmk_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a Password or KerberosKeytab that DataSync uses to access a specific storage location, with a customer-managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the SMB location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a customer-managed secret, such as a Password or KerberosKeytab that DataSync uses to access a specific storage location, with a customer-managed Identity and Access Management (IAM) role that provides access to the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv4 or IPv6 addresses for the DNS servers that your SMB file server belongs to. This element applies only if AuthenticationType is set to KERBEROS.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the Windows domain that the SMB file server belongs to. This element applies only if AuthenticationType is set to NTLM. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;((\.|-+)?&#91;A-Za-z0-9&#93;)&#123;0,252&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kerberos_principal" /></td>
    <td><code>string</code></td>
    <td>The Kerberos principal that has permission to access the files, folders, and file metadata in your SMB file server. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SMB location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the SMB location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_secret_config" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as a Password or KerberosKeytab that DataSync uses to access a specific storage location. DataSync uses the default Amazon Web Services-managed KMS key to encrypt this secret in Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="mount_options" /></td>
    <td><code>object</code></td>
    <td>Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The user that can mount and access the files, folders, and file metadata in your SMB file server. This element applies only if AuthenticationType is set to NTLM. (pattern: &lt;code&gt;^&#91;^\x22\x5B\x5D/\\:;|=,+*?\x3C\x3E&#93;&#123;1,104&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_location_smb"><CopyableCode code="describe_location_smb" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for a Server Message Block (SMB) file server is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_smb"><CopyableCode code="create_location_smb" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Subdirectory"><code>Subdirectory</code></a>, <a href="#parameter-ServerHostname"><code>ServerHostname</code></a>, <a href="#parameter-AgentArns"><code>AgentArns</code></a></td>
    <td></td>
    <td>Creates a transfer location for a Server Message Block (SMB) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses SMB file servers. For more information, see Providing DataSync access to SMB file servers.</td>
</tr>
<tr>
    <td><a href="#update_location_smb"><CopyableCode code="update_location_smb" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Server Message Block (SMB) transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an SMB file server.</td>
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
    defaultValue="describe_location_smb"
    values={[
        { label: 'describe_location_smb', value: 'describe_location_smb' }
    ]}
>
<TabItem value="describe_location_smb">

Provides details about how an DataSync transfer location for a Server Message Block (SMB) file server is configured.

```sql
SELECT
agent_arns,
authentication_type,
cmk_secret_config,
creation_time,
custom_secret_config,
dns_ip_addresses,
domain,
kerberos_principal,
location_arn,
location_uri,
managed_secret_config,
mount_options,
user
FROM aws.datasync.location_smbs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_smb"
    values={[
        { label: 'create_location_smb', value: 'create_location_smb' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_smb">

Creates a transfer location for a Server Message Block (SMB) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses SMB file servers. For more information, see Providing DataSync access to SMB file servers.

```sql
INSERT INTO aws.datasync.location_smbs (
Subdirectory,
ServerHostname,
User,
Domain,
Password,
CmkSecretConfig,
CustomSecretConfig,
AgentArns,
MountOptions,
Tags,
AuthenticationType,
DnsIpAddresses,
KerberosPrincipal,
KerberosKeytab,
KerberosKrb5Conf,
region
)
SELECT 
'{{ Subdirectory }}' /* required */,
'{{ ServerHostname }}' /* required */,
'{{ User }}',
'{{ Domain }}',
'{{ Password }}',
'{{ CmkSecretConfig }}',
'{{ CustomSecretConfig }}',
'{{ AgentArns }}' /* required */,
'{{ MountOptions }}',
'{{ Tags }}',
'{{ AuthenticationType }}',
'{{ DnsIpAddresses }}',
'{{ KerberosPrincipal }}',
'{{ KerberosKeytab }}',
'{{ KerberosKrb5Conf }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_smbs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_smbs resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies the name of the share exported by your SMB file server where DataSync will read or write data. You can include a subdirectory in the share path (for example, /path/to/subdirectory). Make sure that other SMB clients in your network can also mount this path. To copy all data in the subdirectory, DataSync must be able to mount the SMB share and access all of its data. For more information, see Providing DataSync access to SMB file servers.
    - name: ServerHostname
      value: "{{ ServerHostname }}"
      description: |
        Specifies the domain name or IP address (IPv4 or IPv6) of the SMB file server that your DataSync agent connects to. If you're using Kerberos authentication, you must specify a domain name.
    - name: User
      value: "{{ User }}"
      description: |
        Specifies the user that can mount and access the files, folders, and file metadata in your SMB file server. This parameter applies only if AuthenticationType is set to NTLM. For information about choosing a user with the right level of access for your transfer, see Providing DataSync access to SMB file servers.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        Specifies the Windows domain name that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to NTLM. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server.
    - name: Password
      value: "{{ Password }}"
      description: |
        Specifies the password of the user who can mount your SMB file server and has permission to access the files and folders involved in your transfer. This parameter applies only if AuthenticationType is set to NTLM.
    - name: CmkSecretConfig
      description: |
        Specifies configuration information for a DataSync-managed secret, either a Password or KerberosKeytab (for NTLM (default) and KERBEROS authentication types, respectively) that DataSync uses to access a specific SMB storage location, with a customer-managed KMS key. When you include this parameter as part of a CreateLocationSmbRequest request, you provide only the KMS key ARN. DataSync uses this KMS key together with either the Password or KerberosKeytab you specify to create a DataSync-managed secret to store the location access credentials. Make sure that DataSync has permission to access the KMS key that you specify. For more information, see Using a service-managed secret encrypted with a custom KMS key. You can use either CmkSecretConfig (with either Password or KerberosKeytab) or CustomSecretConfig (without any Password and KerberosKeytab) to provide credentials for a CreateLocationSmbRequest request. Do not provide both CmkSecretConfig and CustomSecretConfig parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: CustomSecretConfig
      description: |
        Specifies configuration information for a customer-managed Secrets Manager secret where the SMB storage location credentials is stored in Secrets Manager as plain text (for Password) or binary (for KerberosKeytab). This configuration includes the secret ARN, and the ARN for an IAM role that provides access to the secret. For more information, see Using a secret that you manage. You can use either CmkSecretConfig (with SasConfiguration) or CustomSecretConfig (without SasConfiguration) to provide credentials for a CreateLocationSmbRequest request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
    - name: AgentArns
      value:
        - "{{ AgentArns }}"
      description: |
        Specifies the DataSync agent (or agents) that can connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN).
    - name: MountOptions
      description: |
        Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.
      value:
        Version: "{{ Version }}"
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AuthenticationType
      value: "{{ AuthenticationType }}"
      description: |
        Specifies the authentication protocol that DataSync uses to connect to your SMB file server. DataSync supports NTLM (default) and KERBEROS authentication. For more information, see Providing DataSync access to SMB file servers.
      valid_values: ['NTLM', 'KERBEROS']
    - name: DnsIpAddresses
      value:
        - "{{ DnsIpAddresses }}"
      description: |
        Specifies the IPv4 or IPv6 addresses for the DNS servers that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.
    - name: KerberosPrincipal
      value: "{{ KerberosPrincipal }}"
      description: |
        Specifies a Kerberos principal, which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. A Kerberos principal might look like HOST/kerberosuser@MYDOMAIN.ORG. Principal names are case sensitive. Your DataSync task execution will fail if the principal that you specify for this parameter doesn’t exactly match the principal that you use to create the keytab file.
    - name: KerberosKeytab
      value: "{{ KerberosKeytab }}"
      description: |
        Specifies your Kerberos key table (keytab) file, which includes mappings between your Kerberos principal and encryption keys. To avoid task execution errors, make sure that the Kerberos principal that you use to create the keytab file matches exactly what you specify for KerberosPrincipal.
    - name: KerberosKrb5Conf
      value: "{{ KerberosKrb5Conf }}"
      description: |
        Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. The file must be base64 encoded. If you're using the CLI, the encoding is done for you.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_smb"
    values={[
        { label: 'update_location_smb', value: 'update_location_smb' }
    ]}
>
<TabItem value="update_location_smb">

Modifies the following configuration parameters of the Server Message Block (SMB) transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with an SMB file server.

```sql
UPDATE aws.datasync.location_smbs
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
ServerHostname = '{{ ServerHostname }}',
User = '{{ User }}',
Domain = '{{ Domain }}',
Password = '{{ Password }}',
CmkSecretConfig = '{{ CmkSecretConfig }}',
CustomSecretConfig = '{{ CustomSecretConfig }}',
AgentArns = '{{ AgentArns }}',
MountOptions = '{{ MountOptions }}',
AuthenticationType = '{{ AuthenticationType }}',
DnsIpAddresses = '{{ DnsIpAddresses }}',
KerberosPrincipal = '{{ KerberosPrincipal }}',
KerberosKeytab = '{{ KerberosKeytab }}',
KerberosKrb5Conf = '{{ KerberosKrb5Conf }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
