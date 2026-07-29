--- 
title: buyer_dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - buyer_dashboards
  - marketplace_reporting
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

Creates, updates, deletes, gets or lists a <code>buyer_dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buyer_dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_reporting.buyer_dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_buyer_dashboard"
    values={[
        { label: 'get_buyer_dashboard', value: 'get_buyer_dashboard' }
    ]}
>
<TabItem value="get_buyer_dashboard">

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
    <td><CopyableCode code="dashboard_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the returned dashboard. (pattern: &lt;code&gt;arn:aws:aws-marketplace::&#91;0-9&#93;&#123;12&#125;:AWSMarketplace/ReportingData/(Agreement_V1/Dashboard/AgreementSummary_V1|BillingEvent_V1/Dashboard/CostAnalysis_V1)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="embed_url" /></td>
    <td><code>string</code></td>
    <td>The dashboard's embedding URL.</td>
</tr>
<tr>
    <td><CopyableCode code="embedding_domains" /></td>
    <td><code>array</code></td>
    <td>The fully qualified domains specified in the request. The domains enable access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call. To include all subdomains under a specific domain, use *. For example, https:​//*.amazon.com includes all subdomains under https:​//aws.amazon.com.</td>
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
    <td><a href="#get_buyer_dashboard"><CopyableCode code="get_buyer_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates an embedding URL for an Amazon QuickSight dashboard for an anonymous user. This API is available only to Amazon Web Services Organization management accounts or delegated administrators registered for the procurement insights (procurement-insights.marketplace.amazonaws.com) feature. The following rules apply to a generated URL: It contains a temporary bearer token, valid for 5 minutes after it is generated. Once redeemed within that period, it cannot be re-used again. It has a session lifetime of one hour. The 5-minute validity period runs separately from the session lifetime.</td>
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
    defaultValue="get_buyer_dashboard"
    values={[
        { label: 'get_buyer_dashboard', value: 'get_buyer_dashboard' }
    ]}
>
<TabItem value="get_buyer_dashboard">

Generates an embedding URL for an Amazon QuickSight dashboard for an anonymous user. This API is available only to Amazon Web Services Organization management accounts or delegated administrators registered for the procurement insights (procurement-insights.marketplace.amazonaws.com) feature. The following rules apply to a generated URL: It contains a temporary bearer token, valid for 5 minutes after it is generated. Once redeemed within that period, it cannot be re-used again. It has a session lifetime of one hour. The 5-minute validity period runs separately from the session lifetime.

```sql
SELECT
dashboard_identifier,
embed_url,
embedding_domains
FROM aws.marketplace_reporting.buyer_dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
