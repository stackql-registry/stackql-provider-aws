--- 
title: location_azure_blobs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_azure_blobs
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

Creates, updates, deletes, gets or lists a <code>location_azure_blobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_azure_blobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_azure_blobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_azure_blob"
    values={[
        { label: 'describe_location_azure_blob', value: 'describe_location_azure_blob' }
    ]}
>
<TabItem value="describe_location_azure_blob">

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
    <td><CopyableCode code="AccessTier" /></td>
    <td><code>string</code></td>
    <td>The access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see Access tiers. (HOT, COOL, ARCHIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="AgentArns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the DataSync agents that can connect with your Azure Blob Storage container.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationType" /></td>
    <td><code>string</code></td>
    <td>The authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS). (SAS, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="BlobType" /></td>
    <td><code>string</code></td>
    <td>The type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the Azure Blob Storage documentation. (BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="CmkSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as an authentication token that DataSync uses to access a specific storage location, with a customer-managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that your Azure Blob Storage transfer location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a customer-managed secret, such as an authentication token that DataSync uses to access a specific storage location, with a customer-managed Identity and Access Management (IAM) role that provides access to the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="LocationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of your Azure Blob Storage transfer location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URL of the Azure Blob Storage container involved in your transfer. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedSecretConfig" /></td>
    <td><code>object</code></td>
    <td>Describes configuration information for a DataSync-managed secret, such as an authentication token that DataSync uses to access a specific storage location. DataSync uses the default Amazon Web Services-managed KMS key to encrypt this secret in Secrets Manager.</td>
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
    <td><a href="#describe_location_azure_blob"><CopyableCode code="describe_location_azure_blob" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for Microsoft Azure Blob Storage is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_azure_blob"><CopyableCode code="create_location_azure_blob" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerUrl"><code>ContainerUrl</code></a>, <a href="#parameter-AuthenticationType"><code>AuthenticationType</code></a></td>
    <td></td>
    <td>Creates a transfer location for a Microsoft Azure Blob Storage container. DataSync can use this location as a transfer source or destination. You can make transfers with or without a DataSync agent that connects to your container. Before you begin, make sure you know how DataSync accesses Azure Blob Storage and works with access tiers and blob types.</td>
</tr>
<tr>
    <td><a href="#update_location_azure_blob"><CopyableCode code="update_location_azure_blob" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configurations of the Microsoft Azure Blob Storage transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with Azure Blob Storage.</td>
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
    defaultValue="describe_location_azure_blob"
    values={[
        { label: 'describe_location_azure_blob', value: 'describe_location_azure_blob' }
    ]}
>
<TabItem value="describe_location_azure_blob">

Provides details about how an DataSync transfer location for Microsoft Azure Blob Storage is configured.

```sql
SELECT
AccessTier,
AgentArns,
AuthenticationType,
BlobType,
CmkSecretConfig,
CreationTime,
CustomSecretConfig,
LocationArn,
LocationUri,
ManagedSecretConfig
FROM aws.datasync.location_azure_blobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_azure_blob"
    values={[
        { label: 'create_location_azure_blob', value: 'create_location_azure_blob' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_azure_blob">

Creates a transfer location for a Microsoft Azure Blob Storage container. DataSync can use this location as a transfer source or destination. You can make transfers with or without a DataSync agent that connects to your container. Before you begin, make sure you know how DataSync accesses Azure Blob Storage and works with access tiers and blob types.

```sql
INSERT INTO aws.datasync.location_azure_blobs (
ContainerUrl,
AuthenticationType,
SasConfiguration,
BlobType,
AccessTier,
Subdirectory,
AgentArns,
Tags,
CmkSecretConfig,
CustomSecretConfig,
region
)
SELECT 
'{{ ContainerUrl }}' /* required */,
'{{ AuthenticationType }}' /* required */,
'{{ SasConfiguration }}',
'{{ BlobType }}',
'{{ AccessTier }}',
'{{ Subdirectory }}',
'{{ AgentArns }}',
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
- name: location_azure_blobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_azure_blobs resource.
    - name: ContainerUrl
      value: "{{ ContainerUrl }}"
      description: |
        Specifies the URL of the Azure Blob Storage container involved in your transfer.
    - name: AuthenticationType
      value: "{{ AuthenticationType }}"
      description: |
        Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS).
      valid_values: ['SAS', 'NONE']
    - name: SasConfiguration
      description: |
        Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage. If you provide an authentication token using SasConfiguration, but do not provide secret configuration details using CmkSecretConfig or CustomSecretConfig, then DataSync stores the token using your Amazon Web Services account's secrets manager secret.
      value:
        Token: "{{ Token }}"
    - name: BlobType
      value: "{{ BlobType }}"
      description: |
        Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the Azure Blob Storage documentation.
      valid_values: ['BLOCK']
    - name: AccessTier
      value: "{{ AccessTier }}"
      description: |
        Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see Access tiers.
      valid_values: ['HOT', 'COOL', 'ARCHIVE']
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, /my/images).
    - name: AgentArns
      value:
        - "{{ AgentArns }}"
      description: |
        (Optional) Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter. You can specify more than one agent. For more information, see Using multiple agents for your transfer. Make sure you configure this parameter correctly when you first create your storage location. You cannot add or remove agents from a storage location after you create it.
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your transfer location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CmkSecretConfig
      description: |
        Specifies configuration information for a DataSync-managed secret, which includes the authentication token that DataSync uses to access a specific AzureBlob storage location, with a customer-managed KMS key. When you include this parameter as part of a CreateLocationAzureBlob request, you provide only the KMS key ARN. DataSync uses this KMS key together with the authentication token you specify for SasConfiguration to create a DataSync-managed secret to store the location access credentials. Make sure that DataSync has permission to access the KMS key that you specify. For more information, see Using a service-managed secret encrypted with a custom KMS key. You can use either CmkSecretConfig (with SasConfiguration) or CustomSecretConfig (without SasConfiguration) to provide credentials for a CreateLocationAzureBlob request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: CustomSecretConfig
      description: |
        Specifies configuration information for a customer-managed Secrets Manager secret where the authentication token for an AzureBlob storage location is stored in plain text, in Secrets Manager. This configuration includes the secret ARN, and the ARN for an IAM role that provides access to the secret. For more information, see Using a secret that you manage. You can use either CmkSecretConfig (with SasConfiguration) or CustomSecretConfig (without SasConfiguration) to provide credentials for a CreateLocationAzureBlob request. Do not provide both parameters for the same request.
      value:
        SecretArn: "{{ SecretArn }}"
        SecretAccessRoleArn: "{{ SecretAccessRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_azure_blob"
    values={[
        { label: 'update_location_azure_blob', value: 'update_location_azure_blob' }
    ]}
>
<TabItem value="update_location_azure_blob">

Modifies the following configurations of the Microsoft Azure Blob Storage transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with Azure Blob Storage.

```sql
UPDATE aws.datasync.location_azure_blobs
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
AuthenticationType = '{{ AuthenticationType }}',
SasConfiguration = '{{ SasConfiguration }}',
BlobType = '{{ BlobType }}',
AccessTier = '{{ AccessTier }}',
AgentArns = '{{ AgentArns }}',
CmkSecretConfig = '{{ CmkSecretConfig }}',
CustomSecretConfig = '{{ CustomSecretConfig }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
