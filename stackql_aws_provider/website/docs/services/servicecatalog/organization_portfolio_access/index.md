--- 
title: organization_portfolio_access
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_portfolio_access
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

Creates, updates, deletes, gets or lists an <code>organization_portfolio_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_portfolio_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.organization_portfolio_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organization_portfolio_access"
    values={[
        { label: 'list_organization_portfolio_access', value: 'list_organization_portfolio_access' }
    ]}
>
<TabItem value="list_organization_portfolio_access">

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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The organization node type. (ORGANIZATION, ORGANIZATIONAL_UNIT, ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The identifier of the organization node. (pattern: &lt;code&gt;(^&#91;0-9&#93;&#123;12&#125;$)|(^arn:aws:organizations::\d&#123;12&#125;:organization\/o-&#91;a-z0-9&#93;&#123;10,32&#125;)|(^o-&#91;a-z0-9&#93;&#123;10,32&#125;$)|(^arn:aws:organizations::\d&#123;12&#125;:ou\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;0-9a-z&#93;&#123;8,32&#125;$)|(^ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;$)&lt;/code&gt;)</td>
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
    <td><a href="#list_organization_portfolio_access"><CopyableCode code="list_organization_portfolio_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin. If a delegated admin is de-registered, they can no longer perform this operation.</td>
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
    defaultValue="list_organization_portfolio_access"
    values={[
        { label: 'list_organization_portfolio_access', value: 'list_organization_portfolio_access' }
    ]}
>
<TabItem value="list_organization_portfolio_access">

Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin. If a delegated admin is de-registered, they can no longer perform this operation.

```sql
SELECT
type,
value
FROM aws.servicecatalog.organization_portfolio_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
