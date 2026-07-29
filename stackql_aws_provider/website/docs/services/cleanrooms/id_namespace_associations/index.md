--- 
title: id_namespace_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - id_namespace_associations
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

Creates, updates, deletes, gets or lists an <code>id_namespace_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="id_namespace_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.id_namespace_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_namespace_association"
    values={[
        { label: 'get_id_namespace_association', value: 'get_id_namespace_association' },
        { label: 'list_id_namespace_associations', value: 'list_id_namespace_associations' }
    ]}
>
<TabItem value="get_id_namespace_association">

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
    <td>The unique identifier for this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this ID namespace association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ID namespace association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idnamespaceassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ID namespace association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ID namespace association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id_mapping_config" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_config" /></td>
    <td><code>object</code></td>
    <td>Provides the information for the ID namespace association input reference configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_properties" /></td>
    <td><code>object</code></td>
    <td>The input reference properties for the ID namespace association.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership resource for this ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership resource for this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ID namespace association was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_id_namespace_associations">

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
    <td>The unique identifier of this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ID namespace association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this ID namespace association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idnamespaceassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this ID namespace association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ID namespace association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_config" /></td>
    <td><code>object</code></td>
    <td>Provides the information for the ID namespace association input reference configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="input_reference_properties" /></td>
    <td><code>object</code></td>
    <td>The input reference properties for this ID namespace association.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership resource for this ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership resource for this ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which this ID namespace association has been updated.</td>
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
    <td><a href="#get_id_namespace_association"><CopyableCode code="get_id_namespace_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_namespace_association_identifier"><code>id_namespace_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an ID namespace association.</td>
</tr>
<tr>
    <td><a href="#list_id_namespace_associations"><CopyableCode code="list_id_namespace_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of ID namespace associations.</td>
</tr>
<tr>
    <td><a href="#create_id_namespace_association"><CopyableCode code="create_id_namespace_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputReferenceConfig"><code>inputReferenceConfig</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an ID namespace association.</td>
</tr>
<tr>
    <td><a href="#update_id_namespace_association"><CopyableCode code="update_id_namespace_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_namespace_association_identifier"><code>id_namespace_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details that are necessary to update an ID namespace association.</td>
</tr>
<tr>
    <td><a href="#delete_id_namespace_association"><CopyableCode code="delete_id_namespace_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_namespace_association_identifier"><code>id_namespace_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ID namespace association.</td>
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
<tr id="parameter-id_namespace_association_identifier">
    <td><CopyableCode code="id_namespace_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ID namespace association that you want to delete.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the ID namespace association that you want to delete.</td>
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
    defaultValue="get_id_namespace_association"
    values={[
        { label: 'get_id_namespace_association', value: 'get_id_namespace_association' },
        { label: 'list_id_namespace_associations', value: 'list_id_namespace_associations' }
    ]}
>
<TabItem value="get_id_namespace_association">

Retrieves an ID namespace association.

```sql
SELECT
id,
name,
arn,
collaboration_arn,
collaboration_id,
create_time,
description,
id_mapping_config,
input_reference_config,
input_reference_properties,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.id_namespace_associations
WHERE id_namespace_association_identifier = '{{ id_namespace_association_identifier }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_id_namespace_associations">

Returns a list of ID namespace associations.

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
input_reference_properties,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.id_namespace_associations
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
    defaultValue="create_id_namespace_association"
    values={[
        { label: 'create_id_namespace_association', value: 'create_id_namespace_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_id_namespace_association">

Creates an ID namespace association.

```sql
INSERT INTO aws.cleanrooms.id_namespace_associations (
inputReferenceConfig,
tags,
name,
description,
idMappingConfig,
membership_identifier,
region
)
SELECT 
'{{ inputReferenceConfig }}' /* required */,
'{{ tags }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ idMappingConfig }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
id_namespace_association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: id_namespace_associations
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the id_namespace_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the id_namespace_associations resource.
    - name: inputReferenceConfig
      description: |
        Provides the information for the ID namespace association input reference configuration.
      value:
        inputReferenceArn: "{{ inputReferenceArn }}"
        manageResourcePolicies: {{ manageResourcePolicies }}
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: idMappingConfig
      description: |
        The configuration settings for the ID mapping table.
      value:
        allowUseAsDimensionColumn: {{ allowUseAsDimensionColumn }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_id_namespace_association"
    values={[
        { label: 'update_id_namespace_association', value: 'update_id_namespace_association' }
    ]}
>
<TabItem value="update_id_namespace_association">

Provides the details that are necessary to update an ID namespace association.

```sql
UPDATE aws.cleanrooms.id_namespace_associations
SET 
name = '{{ name }}',
description = '{{ description }}',
idMappingConfig = '{{ idMappingConfig }}'
WHERE 
id_namespace_association_identifier = '{{ id_namespace_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id_namespace_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_id_namespace_association"
    values={[
        { label: 'delete_id_namespace_association', value: 'delete_id_namespace_association' }
    ]}
>
<TabItem value="delete_id_namespace_association">

Deletes an ID namespace association.

```sql
DELETE FROM aws.cleanrooms.id_namespace_associations
WHERE id_namespace_association_identifier = '{{ id_namespace_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
