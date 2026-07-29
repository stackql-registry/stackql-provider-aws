--- 
title: integration_resource_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_resource_properties
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

Creates, updates, deletes, gets or lists an <code>integration_resource_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_resource_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.integration_resource_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration_resource_property"
    values={[
        { label: 'get_integration_resource_property', value: 'get_integration_resource_property' },
        { label: 'list_integration_resource_properties', value: 'list_integration_resource_properties' }
    ]}
>
<TabItem value="get_integration_resource_property">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The connection ARN of the source, or the database ARN of the target.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_property_arn" /></td>
    <td><code>string</code></td>
    <td>The resource ARN created through this create API. The format is something like arn:aws:glue:<code>&lt;region&gt;</code>:<code>&lt;account_id&gt;</code>:integrationresourceproperty/*</td>
</tr>
<tr>
    <td><CopyableCode code="source_processing_properties" /></td>
    <td><code>object</code></td>
    <td>The resource properties associated with the integration source.</td>
</tr>
<tr>
    <td><CopyableCode code="target_processing_properties" /></td>
    <td><code>object</code></td>
    <td>The resource properties associated with the integration target.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_integration_resource_properties">

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
    <td><CopyableCode code="integration_resource_property_list" /></td>
    <td><code>array</code></td>
    <td>A list of integration resource property meeting the filter criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>This is the pagination token for the next page.</td>
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
    <td><a href="#get_integration_resource_property"><CopyableCode code="get_integration_resource_property" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is used for fetching the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target)</td>
</tr>
<tr>
    <td><a href="#list_integration_resource_properties"><CopyableCode code="list_integration_resource_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List integration resource properties for a single customer. It supports the filters, maxRecords and markers.</td>
</tr>
<tr>
    <td><a href="#create_integration_resource_property"><CopyableCode code="create_integration_resource_property" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>This API can be used for setting up the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. To set both source and target properties the same API needs to be invoked with the Glue connection ARN as ResourceArn with SourceProcessingProperties and the Glue database ARN as ResourceArn with TargetProcessingProperties respectively.</td>
</tr>
<tr>
    <td><a href="#update_integration_resource_property"><CopyableCode code="update_integration_resource_property" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>This API can be used for updating the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. Since the same resource can be used across multiple integrations, updating resource properties will impact all the integrations using it.</td>
</tr>
<tr>
    <td><a href="#delete_integration_resource_property"><CopyableCode code="delete_integration_resource_property" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is used for deleting the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target).</td>
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
    defaultValue="get_integration_resource_property"
    values={[
        { label: 'get_integration_resource_property', value: 'get_integration_resource_property' },
        { label: 'list_integration_resource_properties', value: 'list_integration_resource_properties' }
    ]}
>
<TabItem value="get_integration_resource_property">

This API is used for fetching the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target)

```sql
SELECT
resource_arn,
resource_property_arn,
source_processing_properties,
target_processing_properties
FROM aws.glue.integration_resource_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_integration_resource_properties">

List integration resource properties for a single customer. It supports the filters, maxRecords and markers.

```sql
SELECT
integration_resource_property_list,
marker
FROM aws.glue.integration_resource_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration_resource_property"
    values={[
        { label: 'create_integration_resource_property', value: 'create_integration_resource_property' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration_resource_property">

This API can be used for setting up the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. To set both source and target properties the same API needs to be invoked with the Glue connection ARN as ResourceArn with SourceProcessingProperties and the Glue database ARN as ResourceArn with TargetProcessingProperties respectively.

```sql
INSERT INTO aws.glue.integration_resource_properties (
ResourceArn,
SourceProcessingProperties,
TargetProcessingProperties,
Tags,
region
)
SELECT 
'{{ ResourceArn }}' /* required */,
'{{ SourceProcessingProperties }}',
'{{ TargetProcessingProperties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
resource_arn,
resource_property_arn,
source_processing_properties,
target_processing_properties
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_resource_properties
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integration_resource_properties resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        The connection ARN of the source, or the database ARN of the target.
    - name: SourceProcessingProperties
      description: |
        The resource properties associated with the integration source.
      value:
        RoleArn: "{{ RoleArn }}"
    - name: TargetProcessingProperties
      description: |
        The resource properties associated with the integration target.
      value:
        RoleArn: "{{ RoleArn }}"
        KmsArn: "{{ KmsArn }}"
        ConnectionName: "{{ ConnectionName }}"
        EventBusArn: "{{ EventBusArn }}"
    - name: Tags
      description: |
        Metadata assigned to the resource consisting of a list of key-value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_integration_resource_property"
    values={[
        { label: 'update_integration_resource_property', value: 'update_integration_resource_property' }
    ]}
>
<TabItem value="update_integration_resource_property">

This API can be used for updating the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. Since the same resource can be used across multiple integrations, updating resource properties will impact all the integrations using it.

```sql
UPDATE aws.glue.integration_resource_properties
SET 
ResourceArn = '{{ ResourceArn }}',
SourceProcessingProperties = '{{ SourceProcessingProperties }}',
TargetProcessingProperties = '{{ TargetProcessingProperties }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
resource_arn,
resource_property_arn,
source_processing_properties,
target_processing_properties;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration_resource_property"
    values={[
        { label: 'delete_integration_resource_property', value: 'delete_integration_resource_property' }
    ]}
>
<TabItem value="delete_integration_resource_property">

This API is used for deleting the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target).

```sql
DELETE FROM aws.glue.integration_resource_properties
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
