--- 
title: data_table_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - data_table_attributes
  - connect
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

Creates, updates, deletes, gets or lists a <code>data_table_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_table_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.data_table_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_table_attribute"
    values={[
        { label: 'describe_data_table_attribute', value: 'describe_data_table_attribute' },
        { label: 'list_data_table_attributes', value: 'list_data_table_attributes' }
    ]}
>
<TabItem value="describe_data_table_attribute">

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
    <td><CopyableCode code="AttributeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the attribute within the data table.</td>
</tr>
<tr>
    <td><CopyableCode code="DataTableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data table that contains this attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="DataTableId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data table that contains this attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description explaining the purpose and usage of this attribute. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this attribute was last modified, used for region replication. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this attribute was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LockVersion" /></td>
    <td><code>object</code></td>
    <td>The lock version for this attribute, used for optimistic locking to prevent concurrent modification conflicts.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the attribute. Must be unique within the data table and conform to Connect naming standards. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Primary" /></td>
    <td><code>boolean</code></td>
    <td>Boolean indicating whether this attribute is used as a primary key for record identification. Primary attributes must have unique value combinations and cannot contain expressions.</td>
</tr>
<tr>
    <td><CopyableCode code="Validation" /></td>
    <td><code>object</code></td>
    <td>Defines validation rules for data table attribute values. Based on JSON Schema Draft 2020-12 with additional Connect-specific validations. Validation rules ensure data integrity and consistency across the data table.</td>
</tr>
<tr>
    <td><CopyableCode code="ValueType" /></td>
    <td><code>string</code></td>
    <td>The type of value allowed for this attribute. Must be one of TEXT, TEXT_LIST, NUMBER, NUMBER_LIST, or BOOLEAN. Determines how values are validated and processed. (TEXT, NUMBER, BOOLEAN, TEXT_LIST, NUMBER_LIST)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The version identifier for this attribute, used for versioning and change tracking.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_table_attributes">

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
    <td><CopyableCode code="AttributeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the attribute within the data table.</td>
</tr>
<tr>
    <td><CopyableCode code="DataTableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data table that contains this attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="DataTableId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data table that contains this attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description explaining the purpose and usage of this attribute. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this attribute was last modified, used for region replication. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this attribute was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LockVersion" /></td>
    <td><code>object</code></td>
    <td>The lock version for this attribute, used for optimistic locking to prevent concurrent modification conflicts.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the attribute. Must be unique within the data table and conform to Connect naming standards. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Primary" /></td>
    <td><code>boolean</code></td>
    <td>Boolean indicating whether this attribute is used as a primary key for record identification. Primary attributes must have unique value combinations and cannot contain expressions.</td>
</tr>
<tr>
    <td><CopyableCode code="Validation" /></td>
    <td><code>object</code></td>
    <td>Defines validation rules for data table attribute values. Based on JSON Schema Draft 2020-12 with additional Connect-specific validations. Validation rules ensure data integrity and consistency across the data table.</td>
</tr>
<tr>
    <td><CopyableCode code="ValueType" /></td>
    <td><code>string</code></td>
    <td>The type of value allowed for this attribute. Must be one of TEXT, TEXT_LIST, NUMBER, NUMBER_LIST, or BOOLEAN. Determines how values are validated and processed. (TEXT, NUMBER, BOOLEAN, TEXT_LIST, NUMBER_LIST)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The version identifier for this attribute, used for versioning and change tracking.</td>
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
    <td><a href="#describe_data_table_attribute"><CopyableCode code="describe_data_table_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-attribute_name"><code>attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information for a specific data table attribute including its configuration, validation rules, and metadata. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.</td>
</tr>
<tr>
    <td><a href="#list_data_table_attributes"><CopyableCode code="list_data_table_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns all attributes for a specified data table. A maximum of 100 attributes per data table is allowed. Customers can request an increase by using Amazon Web Services Service Quotas. The response can be filtered by specific attribute IDs for CloudFormation integration.</td>
</tr>
<tr>
    <td><a href="#create_data_table_attribute"><CopyableCode code="create_data_table_attribute" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ValueType"><code>ValueType</code></a></td>
    <td></td>
    <td>Adds an attribute to an existing data table. Creating a new primary attribute uses the empty value for the specified value type for all existing records. This should not affect uniqueness of published data tables since the existing primary values will already be unique. Creating attributes does not create any values. System managed tables may not allow customers to create new attributes.</td>
</tr>
<tr>
    <td><a href="#update_data_table_attribute"><CopyableCode code="update_data_table_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-attribute_name"><code>attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ValueType"><code>ValueType</code></a></td>
    <td></td>
    <td>Updates all properties for an attribute using all properties from CreateDataTableAttribute. There are no other granular update endpoints. It does not act as a patch operation - all properties must be provided. System managed attributes are not mutable by customers. Changing an attribute's validation does not invalidate existing values since validation only runs when values are created or updated.</td>
</tr>
<tr>
    <td><a href="#delete_data_table_attribute"><CopyableCode code="delete_data_table_attribute" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-attribute_name"><code>attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an attribute and all its values from a data table.</td>
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
<tr id="parameter-attribute_name">
    <td><CopyableCode code="attribute_name" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute to delete.</td>
</tr>
<tr id="parameter-data_table_id">
    <td><CopyableCode code="data_table_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data table.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data table attributes to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_table_attribute"
    values={[
        { label: 'describe_data_table_attribute', value: 'describe_data_table_attribute' },
        { label: 'list_data_table_attributes', value: 'list_data_table_attributes' }
    ]}
>
<TabItem value="describe_data_table_attribute">

Returns detailed information for a specific data table attribute including its configuration, validation rules, and metadata. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.

```sql
SELECT
AttributeId,
DataTableArn,
DataTableId,
Description,
LastModifiedRegion,
LastModifiedTime,
LockVersion,
Name,
Primary,
Validation,
ValueType,
Version
FROM aws.connect.data_table_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND data_table_id = '{{ data_table_id }}' -- required
AND attribute_name = '{{ attribute_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_table_attributes">

Returns all attributes for a specified data table. A maximum of 100 attributes per data table is allowed. Customers can request an increase by using Amazon Web Services Service Quotas. The response can be filtered by specific attribute IDs for CloudFormation integration.

```sql
SELECT
AttributeId,
DataTableArn,
DataTableId,
Description,
LastModifiedRegion,
LastModifiedTime,
LockVersion,
Name,
Primary,
Validation,
ValueType,
Version
FROM aws.connect.data_table_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND data_table_id = '{{ data_table_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_table_attribute"
    values={[
        { label: 'create_data_table_attribute', value: 'create_data_table_attribute' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_table_attribute">

Adds an attribute to an existing data table. Creating a new primary attribute uses the empty value for the specified value type for all existing records. This should not affect uniqueness of published data tables since the existing primary values will already be unique. Creating attributes does not create any values. System managed tables may not allow customers to create new attributes.

```sql
INSERT INTO aws.connect.data_table_attributes (
Name,
ValueType,
Description,
Primary,
Validation,
instance_id,
data_table_id,
region
)
SELECT 
'{{ Name }}',
'{{ ValueType }}' /* required */,
'{{ Description }}',
{{ Primary }},
'{{ Validation }}',
'{{ instance_id }}',
'{{ data_table_id }}',
'{{ region }}'
RETURNING
AttributeId,
LockVersion,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_table_attributes
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the data_table_attributes resource.
    - name: data_table_id
      value: "{{ data_table_id }}"
      description: Required parameter for the data_table_attributes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_table_attributes resource.
    - name: Name
      value: "{{ Name }}"
    - name: ValueType
      value: "{{ ValueType }}"
      valid_values: ['TEXT', 'NUMBER', 'BOOLEAN', 'TEXT_LIST', 'NUMBER_LIST']
    - name: Description
      value: "{{ Description }}"
    - name: Primary
      value: {{ Primary }}
    - name: Validation
      description: |
        Defines validation rules for data table attribute values. Based on JSON Schema Draft 2020-12 with additional Connect-specific validations. Validation rules ensure data integrity and consistency across the data table.
      value:
        MinLength: {{ MinLength }}
        MaxLength: {{ MaxLength }}
        MinValues: {{ MinValues }}
        MaxValues: {{ MaxValues }}
        IgnoreCase: {{ IgnoreCase }}
        Minimum: {{ Minimum }}
        Maximum: {{ Maximum }}
        ExclusiveMinimum: {{ ExclusiveMinimum }}
        ExclusiveMaximum: {{ ExclusiveMaximum }}
        MultipleOf: {{ MultipleOf }}
        Enum:
          Strict: {{ Strict }}
          Values:
            - "{{ Values }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_table_attribute"
    values={[
        { label: 'update_data_table_attribute', value: 'update_data_table_attribute' }
    ]}
>
<TabItem value="update_data_table_attribute">

Updates all properties for an attribute using all properties from CreateDataTableAttribute. There are no other granular update endpoints. It does not act as a patch operation - all properties must be provided. System managed attributes are not mutable by customers. Changing an attribute's validation does not invalidate existing values since validation only runs when values are created or updated.

```sql
UPDATE aws.connect.data_table_attributes
SET 
Name = '{{ Name }}',
ValueType = '{{ ValueType }}',
Description = '{{ Description }}',
Primary = {{ Primary }},
Validation = '{{ Validation }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND data_table_id = '{{ data_table_id }}' --required
AND attribute_name = '{{ attribute_name }}' --required
AND region = '{{ region }}' --required
AND ValueType = '{{ ValueType }}' --required
RETURNING
LockVersion,
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_table_attribute"
    values={[
        { label: 'delete_data_table_attribute', value: 'delete_data_table_attribute' }
    ]}
>
<TabItem value="delete_data_table_attribute">

Deletes an attribute and all its values from a data table.

```sql
DELETE FROM aws.connect.data_table_attributes
WHERE instance_id = '{{ instance_id }}' --required
AND data_table_id = '{{ data_table_id }}' --required
AND attribute_name = '{{ attribute_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
