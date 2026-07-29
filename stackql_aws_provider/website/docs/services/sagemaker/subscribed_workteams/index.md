--- 
title: subscribed_workteams
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribed_workteams
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

Creates, updates, deletes, gets or lists a <code>subscribed_workteams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscribed_workteams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.subscribed_workteams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subscribed_workteam"
    values={[
        { label: 'describe_subscribed_workteam', value: 'describe_subscribed_workteam' },
        { label: 'list_subscribed_workteams', value: 'list_subscribed_workteams' }
    ]}
>
<TabItem value="describe_subscribed_workteam">

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
    <td><CopyableCode code="listing_id" /></td>
    <td><code>string</code></td>
    <td>Marketplace product listing ID.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplace_description" /></td>
    <td><code>string</code></td>
    <td>The description of the vendor from the Amazon Marketplace. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="marketplace_title" /></td>
    <td><code>string</code></td>
    <td>The title of the service provided by the vendor in the Amazon Marketplace. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="seller_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vendor in the Amazon Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="workteam_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vendor that you have subscribed. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workteam/.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscribed_workteams">

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
    <td><CopyableCode code="listing_id" /></td>
    <td><code>string</code></td>
    <td>Marketplace product listing ID.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplace_description" /></td>
    <td><code>string</code></td>
    <td>The description of the vendor from the Amazon Marketplace. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="marketplace_title" /></td>
    <td><code>string</code></td>
    <td>The title of the service provided by the vendor in the Amazon Marketplace. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="seller_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vendor in the Amazon Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="workteam_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vendor that you have subscribed. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workteam/.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_subscribed_workteam"><CopyableCode code="describe_subscribed_workteam" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><a href="#list_subscribed_workteams"><CopyableCode code="list_subscribed_workteams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.</td>
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
    defaultValue="describe_subscribed_workteam"
    values={[
        { label: 'describe_subscribed_workteam', value: 'describe_subscribed_workteam' },
        { label: 'list_subscribed_workteams', value: 'list_subscribed_workteams' }
    ]}
>
<TabItem value="describe_subscribed_workteam">

Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.

```sql
SELECT
listing_id,
marketplace_description,
marketplace_title,
seller_name,
workteam_arn
FROM aws.sagemaker.subscribed_workteams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscribed_workteams">

Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.

```sql
SELECT
listing_id,
marketplace_description,
marketplace_title,
seller_name,
workteam_arn
FROM aws.sagemaker.subscribed_workteams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
