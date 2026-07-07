--- 
title: accepted_portfolio_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - accepted_portfolio_shares
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

Creates, updates, deletes, gets or lists an <code>accepted_portfolio_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accepted_portfolio_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.accepted_portfolio_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accepted_portfolio_shares"
    values={[
        { label: 'list_accepted_portfolio_shares', value: 'list_accepted_portfolio_shares' }
    ]}
>
<TabItem value="list_accepted_portfolio_shares">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN assigned to the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time stamp of the creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name to use for display purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The portfolio identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderName" /></td>
    <td><code>string</code></td>
    <td>The name of the portfolio provider.</td>
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
    <td><a href="#list_accepted_portfolio_shares"><CopyableCode code="list_accepted_portfolio_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the PortfolioShareType, you can list portfolios for which organizational shares were accepted by this account.</td>
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
    defaultValue="list_accepted_portfolio_shares"
    values={[
        { label: 'list_accepted_portfolio_shares', value: 'list_accepted_portfolio_shares' }
    ]}
>
<TabItem value="list_accepted_portfolio_shares">

Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the PortfolioShareType, you can list portfolios for which organizational shares were accepted by this account.

```sql
SELECT
ARN,
CreatedTime,
Description,
DisplayName,
Id,
ProviderName
FROM aws.servicecatalog.accepted_portfolio_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
