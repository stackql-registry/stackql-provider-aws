--- 
title: associations
hide_title: false
hide_table_of_contents: false
keywords:
  - associations
  - sagemaker
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

Creates, updates, deletes, gets or lists an <code>associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associations"
    values={[
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="list_associations">

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
    <td><CopyableCode code="AssociationType" /></td>
    <td><code>string</code></td>
    <td>The type of the association. (ContributedTo, AssociatedWith, DerivedFrom, Produced, SameAs)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the destination. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:(experiment|experiment-trial-component|artifact|action|context)/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationName" /></td>
    <td><code>string</code></td>
    <td>The name of the destination. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationType" /></td>
    <td><code>string</code></td>
    <td>The destination type.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:(experiment|experiment-trial-component|artifact|action|context)/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The source type.</td>
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
    <td><a href="#list_associations"><CopyableCode code="list_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the associations in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#add_association"><CopyableCode code="add_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-DestinationArn"><code>DestinationArn</code></a></td>
    <td></td>
    <td>Creates an association between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see Amazon SageMaker ML Lineage Tracking.</td>
</tr>
<tr>
    <td><a href="#delete_association"><CopyableCode code="delete_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an association.</td>
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
    defaultValue="list_associations"
    values={[
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="list_associations">

Lists the associations in your account and their properties.

```sql
SELECT
AssociationType,
CreatedBy,
CreationTime,
DestinationArn,
DestinationName,
DestinationType,
SourceArn,
SourceName,
SourceType
FROM aws.sagemaker.associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_association"
    values={[
        { label: 'add_association', value: 'add_association' }
    ]}
>
<TabItem value="add_association">

Creates an association between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see Amazon SageMaker ML Lineage Tracking.

```sql
UPDATE aws.sagemaker.associations
SET 
SourceArn = '{{ SourceArn }}',
DestinationArn = '{{ DestinationArn }}',
AssociationType = '{{ AssociationType }}'
WHERE 
region = '{{ region }}' --required
AND SourceArn = '{{ SourceArn }}' --required
AND DestinationArn = '{{ DestinationArn }}' --required
RETURNING
DestinationArn,
SourceArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_association"
    values={[
        { label: 'delete_association', value: 'delete_association' }
    ]}
>
<TabItem value="delete_association">

Deletes an association.

```sql
DELETE FROM aws.sagemaker.associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
