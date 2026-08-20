--- 
title: id_mapping_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - id_mapping_tables
  - cleanrooms
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

Creates, updates, deletes, gets or lists an <code>id_mapping_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="id_mapping_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.id_mapping_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_mapping_table"
    values={[
        { label: 'get_id_mapping_table', value: 'get_id_mapping_table' },
        { label: 'list_id_mapping_tables', value: 'list_id_mapping_tables' }
    ]}
>
<TabItem value="get_id_mapping_table">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ID mapping table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ID mapping table. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idmappingtable/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="child_resources" /></td>
    <td><code>array</code></td>
    <td>The child resources that depend on this ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this ID mapping table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ID mapping table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ID mapping table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_config" /></td>
    <td><code>object</code></td>
    <td>Provides the input reference configuration for the ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_properties" /></td>
    <td><code>object</code></td>
    <td>The input reference properties for the ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services KMS key. (pattern: &lt;code&gt;arn:aws:kms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership resource for the ID mapping table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership resource for the ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ID mapping table was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_id_mapping_tables">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this ID mapping table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this ID mapping table. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idmappingtable/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this ID mapping table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this ID mapping table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of this ID mapping table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_config" /></td>
    <td><code>object</code></td>
    <td>Provides the input reference configuration for the ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership resource for this ID mapping table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership resource for this ID mapping table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which this ID mapping table was updated.</td>
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
    <td><a href="#get_id_mapping_table"><CopyableCode code="get_id_mapping_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_mapping_table_identifier"><code>id_mapping_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an ID mapping table.</td>
</tr>
<tr>
    <td><a href="#list_id_mapping_tables"><CopyableCode code="list_id_mapping_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of ID mapping tables.</td>
</tr>
<tr>
    <td><a href="#create_id_mapping_table"><CopyableCode code="create_id_mapping_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-inputReferenceConfig"><code>inputReferenceConfig</code></a></td>
    <td></td>
    <td>Creates an ID mapping table.</td>
</tr>
<tr>
    <td><a href="#update_id_mapping_table"><CopyableCode code="update_id_mapping_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_mapping_table_identifier"><code>id_mapping_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details that are necessary to update an ID mapping table.</td>
</tr>
<tr>
    <td><a href="#delete_id_mapping_table"><CopyableCode code="delete_id_mapping_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_mapping_table_identifier"><code>id_mapping_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ID mapping table.</td>
</tr>
<tr>
    <td><a href="#populate_id_mapping_table"><CopyableCode code="populate_id_mapping_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_mapping_table_identifier"><code>id_mapping_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Defines the information that's necessary to populate an ID mapping table.</td>
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
<tr id="parameter-id_mapping_table_identifier">
    <td><CopyableCode code="id_mapping_table_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ID mapping table that you want to populate.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the ID mapping table that you want to populate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_id_mapping_table"
    values={[
        { label: 'get_id_mapping_table', value: 'get_id_mapping_table' },
        { label: 'list_id_mapping_tables', value: 'list_id_mapping_tables' }
    ]}
>
<TabItem value="get_id_mapping_table">

Retrieves an ID mapping table.

```sql
SELECT
id,
name,
arn,
child_resources,
collaboration_arn,
collaboration_id,
create_time,
description,
input_reference_config,
input_reference_properties,
kms_key_arn,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.id_mapping_tables
WHERE id_mapping_table_identifier = '{{ id_mapping_table_identifier }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_id_mapping_tables">

Returns a list of ID mapping tables.

```sql
SELECT
id,
name,
arn,
collaboration_arn,
collaboration_id,
create_time,
description,
input_reference_config,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.id_mapping_tables
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_id_mapping_table"
    values={[
        { label: 'create_id_mapping_table', value: 'create_id_mapping_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_id_mapping_table">

Creates an ID mapping table.

```sql
INSERT INTO aws.cleanrooms.id_mapping_tables (
name,
description,
inputReferenceConfig,
tags,
kmsKeyArn,
membership_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ inputReferenceConfig }}' /* required */,
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
id_mapping_table
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: id_mapping_tables
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the id_mapping_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the id_mapping_tables resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: inputReferenceConfig
      description: |
        Provides the input reference configuration for the ID mapping table.
      value:
        inputReferenceArn: "{{ inputReferenceArn }}"
        manageResourcePolicies: {{ manageResourcePolicies }}
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_id_mapping_table"
    values={[
        { label: 'update_id_mapping_table', value: 'update_id_mapping_table' }
    ]}
>
<TabItem value="update_id_mapping_table">

Provides the details that are necessary to update an ID mapping table.

```sql
UPDATE aws.cleanrooms.id_mapping_tables
SET 
description = '{{ description }}',
kmsKeyArn = '{{ kmsKeyArn }}'
WHERE 
id_mapping_table_identifier = '{{ id_mapping_table_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id_mapping_table;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_id_mapping_table"
    values={[
        { label: 'delete_id_mapping_table', value: 'delete_id_mapping_table' }
    ]}
>
<TabItem value="delete_id_mapping_table">

Deletes an ID mapping table.

```sql
DELETE FROM aws.cleanrooms.id_mapping_tables
WHERE id_mapping_table_identifier = '{{ id_mapping_table_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="populate_id_mapping_table"
    values={[
        { label: 'populate_id_mapping_table', value: 'populate_id_mapping_table' }
    ]}
>
<TabItem value="populate_id_mapping_table">

Defines the information that's necessary to populate an ID mapping table.

```sql
EXEC aws.cleanrooms.id_mapping_tables.populate_id_mapping_table 
@id_mapping_table_identifier='{{ id_mapping_table_identifier }}' --required, 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"jobType": "{{ jobType }}"
}'
;
```
</TabItem>
</Tabs>
