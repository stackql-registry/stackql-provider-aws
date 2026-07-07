--- 
title: model_card_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - model_card_versions
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

Creates, updates, deletes, gets or lists a <code>model_card_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_card_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_card_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_model_card_versions"
    values={[
        { label: 'list_model_card_versions', value: 'list_model_card_versions' }
    ]}
>
<TabItem value="list_model_card_versions">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the model card version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time date and time that the model card version was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model card. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-card/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardName" /></td>
    <td><code>string</code></td>
    <td>The name of the model card. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardStatus" /></td>
    <td><code>string</code></td>
    <td>The approval status of the model card version within your organization. Different organizations might have different criteria for model card review and approval. Draft: The model card is a work in progress. PendingReview: The model card is pending review. Approved: The model card is approved. Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported. (Draft, PendingReview, Approved, Archived)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelCardVersion" /></td>
    <td><code>integer</code></td>
    <td>A version of the model card.</td>
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
    <td><a href="#list_model_card_versions"><CopyableCode code="list_model_card_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List existing versions of an Amazon SageMaker Model Card.</td>
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
    defaultValue="list_model_card_versions"
    values={[
        { label: 'list_model_card_versions', value: 'list_model_card_versions' }
    ]}
>
<TabItem value="list_model_card_versions">

List existing versions of an Amazon SageMaker Model Card.

```sql
SELECT
CreationTime,
LastModifiedTime,
ModelCardArn,
ModelCardName,
ModelCardStatus,
ModelCardVersion
FROM aws.sagemaker.model_card_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
