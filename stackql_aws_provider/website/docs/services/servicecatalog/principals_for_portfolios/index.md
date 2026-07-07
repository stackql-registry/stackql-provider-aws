--- 
title: principals_for_portfolios
hide_title: false
hide_table_of_contents: false
keywords:
  - principals_for_portfolios
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

Creates, updates, deletes, gets or lists a <code>principals_for_portfolios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principals_for_portfolios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.principals_for_portfolios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_principals_for_portfolio"
    values={[
        { label: 'list_principals_for_portfolio', value: 'list_principals_for_portfolio' }
    ]}
>
<TabItem value="list_principals_for_portfolio">

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
    <td><CopyableCode code="PrincipalARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the principal (user, role, or group). This field allows for an ARN with no accountID, with or without wildcard characters if the PrincipalType is an IAM_PATTERN. For more information, review associate-principal-with-portfolio in the Amazon Web Services CLI Command Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalType" /></td>
    <td><code>string</code></td>
    <td>The principal type. The supported value is IAM if you use a fully defined ARN, or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters. (IAM, IAM_PATTERN)</td>
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
    <td><a href="#list_principals_for_portfolio"><CopyableCode code="list_principals_for_portfolio" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all PrincipalARNs and corresponding PrincipalTypes associated with the specified portfolio.</td>
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
    defaultValue="list_principals_for_portfolio"
    values={[
        { label: 'list_principals_for_portfolio', value: 'list_principals_for_portfolio' }
    ]}
>
<TabItem value="list_principals_for_portfolio">

Lists all PrincipalARNs and corresponding PrincipalTypes associated with the specified portfolio.

```sql
SELECT
PrincipalARN,
PrincipalType
FROM aws.servicecatalog.principals_for_portfolios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
