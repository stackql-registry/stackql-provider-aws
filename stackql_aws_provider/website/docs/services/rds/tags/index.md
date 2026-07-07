--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - rds
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with aws: or rds:. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(&#91;\\p&#123;L&#125;\\p&#123;Z&#125;\\p&#123;N&#125;_.:/=+\\-@&#93;*)$").</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with aws: or rds:. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(&#91;\\p&#123;L&#125;\\p&#123;Z&#125;\\p&#123;N&#125;_.:/=+\\-@&#93;*)$").</td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filters"><code>Filters</code></a></td>
    <td>Lists all tags on an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS Resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#remove_tags_from_resource"><CopyableCode code="remove_tags_from_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes metadata tags from an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS Resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#add_tags_to_resource"><CopyableCode code="add_tags_to_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS. For an overview on tagging your relational database resources, see Tagging Amazon RDS Resources or Tagging Amazon Aurora and Amazon RDS Resources.</td>
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
<tr id="parameter-ResourceName">
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see Constructing an RDS Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>The tag key (name) of the tag to be removed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the Amazon RDS resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

Lists all tags on an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS Resources in the Amazon Aurora User Guide.

```sql
SELECT
Key,
Value
FROM aws.rds.tags
WHERE ResourceName = '{{ ResourceName }}' -- required
AND region = '{{ region }}' -- required
AND Filters = '{{ Filters }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_tags_from_resource"
    values={[
        { label: 'remove_tags_from_resource', value: 'remove_tags_from_resource' },
        { label: 'add_tags_to_resource', value: 'add_tags_to_resource' }
    ]}
>
<TabItem value="remove_tags_from_resource">

Removes metadata tags from an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS Resources in the Amazon Aurora User Guide.

```sql
UPDATE aws.rds.tags
SET 
-- No updatable properties
WHERE 
ResourceName = '{{ ResourceName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="add_tags_to_resource">

Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS. For an overview on tagging your relational database resources, see Tagging Amazon RDS Resources or Tagging Amazon Aurora and Amazon RDS Resources.

```sql
UPDATE aws.rds.tags
SET 
-- No updatable properties
WHERE 
ResourceName = '{{ ResourceName }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
</Tabs>
