--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - marketplace_catalog
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_catalog.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_entity"
    values={[
        { label: 'describe_entity', value: 'describe_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="describe_entity">

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
    <td><CopyableCode code="Details" /></td>
    <td><code>string</code></td>
    <td>This stringified JSON object includes the details of the entity. (pattern: &lt;code&gt;^&#91;\s&#93;*\&#123;&#91;\s\S&#93;*\&#125;&#91;\s&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DetailsDocument" /></td>
    <td><code>object</code></td>
    <td>The JSON value of the details specific to the entity. To download "DetailsDocument" shapes, see the Python and Java shapes on GitHub.</td>
</tr>
<tr>
    <td><CopyableCode code="EntityArn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated to the unique identifier for the entity referenced in this request. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:*/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EntityIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the entity, in the format of EntityId@RevisionId. (pattern: &lt;code&gt;^&#91;\w\-@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EntityType" /></td>
    <td><code>string</code></td>
    <td>The named type of the entity, in the format of EntityType@Version. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The last modified date of the entity, in ISO 8601 format (2018-02-27T13:45:22Z). (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entities">

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
    <td><CopyableCode code="AmiProductSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the AMI product.</td>
</tr>
<tr>
    <td><CopyableCode code="ContainerProductSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the container product.</td>
</tr>
<tr>
    <td><CopyableCode code="DataProductSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="EntityArn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the unique identifier for the entity. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:*/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EntityId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the entity. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EntityType" /></td>
    <td><code>string</code></td>
    <td>The type of the entity. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The last time the entity was published, using ISO 8601 format (2018-02-27T13:45:22Z). (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MachineLearningProductSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of a machine learning product.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name for the entity. This value is not unique. It is defined by the seller. (pattern: &lt;code&gt;^\\S+&#91;\\S\\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OfferSetSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the offer set.</td>
</tr>
<tr>
    <td><CopyableCode code="OfferSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the offer.</td>
</tr>
<tr>
    <td><CopyableCode code="ResaleAuthorizationSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the Resale Authorization.</td>
</tr>
<tr>
    <td><CopyableCode code="SaaSProductSummary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about the SaaS product.</td>
</tr>
<tr>
    <td><CopyableCode code="Visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility status of the entity to buyers. This value can be Public (everyone can view the entity), Limited (the entity is visible to limited accounts only), or Restricted (the entity was published and then unpublished and only existing buyers can view it). (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_entity"><CopyableCode code="describe_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-entityId"><code>entityId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata and content of the entity.</td>
</tr>
<tr>
    <td><a href="#list_entities"><CopyableCode code="list_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the list of entities of a given type.</td>
</tr>
<tr>
    <td><a href="#batch_describe_entities"><CopyableCode code="batch_describe_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EntityRequestList"><code>EntityRequestList</code></a></td>
    <td></td>
    <td>Returns metadata and content for multiple entities. This is the Batch version of the DescribeEntity API and uses the same IAM permission action as DescribeEntity API.</td>
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
<tr id="parameter-catalog">
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Required. The catalog related to the request. Fixed value: AWSMarketplace</td>
</tr>
<tr id="parameter-entityId">
    <td><CopyableCode code="entityId" /></td>
    <td><code>string</code></td>
    <td>Required. The unique ID of the entity to describe.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_entity"
    values={[
        { label: 'describe_entity', value: 'describe_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="describe_entity">

Returns the metadata and content of the entity.

```sql
SELECT
Details,
DetailsDocument,
EntityArn,
EntityIdentifier,
EntityType,
LastModifiedDate
FROM aws.marketplace_catalog.entities
WHERE catalog = '{{ catalog }}' -- required
AND entityId = '{{ entityId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_entities">

Provides the list of entities of a given type.

```sql
SELECT
AmiProductSummary,
ContainerProductSummary,
DataProductSummary,
EntityArn,
EntityId,
EntityType,
LastModifiedDate,
MachineLearningProductSummary,
Name,
OfferSetSummary,
OfferSummary,
ResaleAuthorizationSummary,
SaaSProductSummary,
Visibility
FROM aws.marketplace_catalog.entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_describe_entities"
    values={[
        { label: 'batch_describe_entities', value: 'batch_describe_entities' }
    ]}
>
<TabItem value="batch_describe_entities">

Returns metadata and content for multiple entities. This is the Batch version of the DescribeEntity API and uses the same IAM permission action as DescribeEntity API.

```sql
EXEC aws.marketplace_catalog.entities.batch_describe_entities 
@region='{{ region }}' --required 
@@json=
'{
"EntityRequestList": "{{ EntityRequestList }}"
}'
;
```
</TabItem>
</Tabs>
