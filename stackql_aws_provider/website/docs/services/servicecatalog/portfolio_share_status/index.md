--- 
title: portfolio_share_status
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolio_share_status
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>portfolio_share_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolio_share_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.portfolio_share_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_portfolio_share_status"
    values={[
        { label: 'describe_portfolio_share_status', value: 'describe_portfolio_share_status' }
    ]}
>
<TabItem value="describe_portfolio_share_status">

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
    <td><CopyableCode code="organization_node_value" /></td>
    <td><code>string</code></td>
    <td>Organization node identifier. It can be either account id, organizational unit id or organization id. (pattern: &lt;code&gt;(^&#91;0-9&#93;&#123;12&#125;$)|(^arn:aws:organizations::\d&#123;12&#125;:organization\/o-&#91;a-z0-9&#93;&#123;10,32&#125;)|(^o-&#91;a-z0-9&#93;&#123;10,32&#125;$)|(^arn:aws:organizations::\d&#123;12&#125;:ou\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;0-9a-z&#93;&#123;8,32&#125;$)|(^ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portfolio_id" /></td>
    <td><code>string</code></td>
    <td>The portfolio identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portfolio_share_token" /></td>
    <td><code>string</code></td>
    <td>The token for the portfolio share operation. For example, share-6v24abcdefghi. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="share_details" /></td>
    <td><code>object</code></td>
    <td>Information about the portfolio share operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the portfolio share operation. (NOT_STARTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, ERROR)</td>
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
    <td><a href="#describe_portfolio_share_status"><CopyableCode code="describe_portfolio_share_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.</td>
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
    defaultValue="describe_portfolio_share_status"
    values={[
        { label: 'describe_portfolio_share_status', value: 'describe_portfolio_share_status' }
    ]}
>
<TabItem value="describe_portfolio_share_status">

Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.

```sql
SELECT
organization_node_value,
portfolio_id,
portfolio_share_token,
share_details,
status
FROM aws.servicecatalog.portfolio_share_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
