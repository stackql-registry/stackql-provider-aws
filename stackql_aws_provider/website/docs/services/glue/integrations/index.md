--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - glue
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_integrations"
    values={[
        { label: 'describe_integrations', value: 'describe_integrations' }
    ]}
>
<TabItem value="describe_integrations">

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
    <td><CopyableCode code="Integrations" /></td>
    <td><code>array</code></td>
    <td>A list of zero-ETL integrations.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request.</td>
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
    <td><a href="#describe_integrations"><CopyableCode code="describe_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The API is used to retrieve a list of integrations.</td>
</tr>
<tr>
    <td><a href="#create_integration"><CopyableCode code="create_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntegrationName"><code>IntegrationName</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-TargetArn"><code>TargetArn</code></a></td>
    <td></td>
    <td>Creates a Zero-ETL integration in the caller's account between two resources with Amazon Resource Names (ARNs): the SourceArn and TargetArn.</td>
</tr>
<tr>
    <td><a href="#modify_integration"><CopyableCode code="modify_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntegrationIdentifier"><code>IntegrationIdentifier</code></a></td>
    <td></td>
    <td>Modifies a Zero-ETL integration in the caller's account.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Zero-ETL integration.</td>
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
    defaultValue="describe_integrations"
    values={[
        { label: 'describe_integrations', value: 'describe_integrations' }
    ]}
>
<TabItem value="describe_integrations">

The API is used to retrieve a list of integrations.

```sql
SELECT
Integrations,
Marker
FROM aws.glue.integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration"
    values={[
        { label: 'create_integration', value: 'create_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration">

Creates a Zero-ETL integration in the caller's account between two resources with Amazon Resource Names (ARNs): the SourceArn and TargetArn.

```sql
INSERT INTO aws.glue.integrations (
IntegrationName,
SourceArn,
TargetArn,
Description,
DataFilter,
KmsKeyId,
AdditionalEncryptionContext,
Tags,
IntegrationConfig,
region
)
SELECT 
'{{ IntegrationName }}' /* required */,
'{{ SourceArn }}' /* required */,
'{{ TargetArn }}' /* required */,
'{{ Description }}',
'{{ DataFilter }}',
'{{ KmsKeyId }}',
'{{ AdditionalEncryptionContext }}',
'{{ Tags }}',
'{{ IntegrationConfig }}',
'{{ region }}'
RETURNING
AdditionalEncryptionContext,
CreateTime,
DataFilter,
Description,
Errors,
IntegrationArn,
IntegrationConfig,
IntegrationName,
KmsKeyId,
SourceArn,
Status,
Tags,
TargetArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integrations resource.
    - name: IntegrationName
      value: "{{ IntegrationName }}"
      description: |
        A unique name for an integration in Glue.
    - name: SourceArn
      value: "{{ SourceArn }}"
      description: |
        The ARN of the source resource for the integration.
    - name: TargetArn
      value: "{{ TargetArn }}"
      description: |
        The ARN of the target resource for the integration.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the integration.
    - name: DataFilter
      value: "{{ DataFilter }}"
      description: |
        Selects source tables for the integration using Maxwell filter syntax.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The ARN of a KMS key used for encrypting the channel.
    - name: AdditionalEncryptionContext
      value: "{{ AdditionalEncryptionContext }}"
      description: |
        An optional set of non-secret key–value pairs that contains additional contextual information for encryption. This can only be provided if KMSKeyId is provided.
    - name: Tags
      description: |
        Metadata assigned to the resource consisting of a list of key-value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: IntegrationConfig
      description: |
        The configuration settings.
      value:
        RefreshInterval: "{{ RefreshInterval }}"
        SourceProperties: "{{ SourceProperties }}"
        ContinuousSync: {{ ContinuousSync }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_integration"
    values={[
        { label: 'modify_integration', value: 'modify_integration' }
    ]}
>
<TabItem value="modify_integration">

Modifies a Zero-ETL integration in the caller's account.

```sql
UPDATE aws.glue.integrations
SET 
IntegrationIdentifier = '{{ IntegrationIdentifier }}',
Description = '{{ Description }}',
DataFilter = '{{ DataFilter }}',
IntegrationConfig = '{{ IntegrationConfig }}',
IntegrationName = '{{ IntegrationName }}'
WHERE 
region = '{{ region }}' --required
AND IntegrationIdentifier = '{{ IntegrationIdentifier }}' --required
RETURNING
AdditionalEncryptionContext,
CreateTime,
DataFilter,
Description,
Errors,
IntegrationArn,
IntegrationConfig,
IntegrationName,
KmsKeyId,
SourceArn,
Status,
Tags,
TargetArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Deletes the specified Zero-ETL integration.

```sql
DELETE FROM aws.glue.integrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
