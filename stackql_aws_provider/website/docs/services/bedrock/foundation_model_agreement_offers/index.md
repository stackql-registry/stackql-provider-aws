--- 
title: foundation_model_agreement_offers
hide_title: false
hide_table_of_contents: false
keywords:
  - foundation_model_agreement_offers
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>foundation_model_agreement_offers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="foundation_model_agreement_offers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.foundation_model_agreement_offers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_foundation_model_agreement_offers"
    values={[
        { label: 'list_foundation_model_agreement_offers', value: 'list_foundation_model_agreement_offers' }
    ]}
>
<TabItem value="list_foundation_model_agreement_offers">

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
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Model Id of the foundation model. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;(/&#91;a-z0-9&#93;&#123;12&#125;|)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>List of the offers associated with the specified model.</td>
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
    <td><a href="#list_foundation_model_agreement_offers"><CopyableCode code="list_foundation_model_agreement_offers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-offerType"><code>offerType</code></a></td>
    <td>Get the offers associated with the specified model.</td>
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
<tr id="parameter-model_id">
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Model Id of the foundation model.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-offerType">
    <td><CopyableCode code="offerType" /></td>
    <td><code>string</code></td>
    <td>Type of offer associated with the model.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_foundation_model_agreement_offers"
    values={[
        { label: 'list_foundation_model_agreement_offers', value: 'list_foundation_model_agreement_offers' }
    ]}
>
<TabItem value="list_foundation_model_agreement_offers">

Get the offers associated with the specified model.

```sql
SELECT
model_id,
offers
FROM aws.bedrock.foundation_model_agreement_offers
WHERE model_id = '{{ model_id }}' -- required
AND region = '{{ region }}' -- required
AND offerType = '{{ offerType }}'
;
```
</TabItem>
</Tabs>
