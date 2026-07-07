--- 
title: tax_exemptions
hide_title: false
hide_table_of_contents: false
keywords:
  - tax_exemptions
  - taxsettings
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

Creates, updates, deletes, gets or lists a <code>tax_exemptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tax_exemptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.tax_exemptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_tax_exemptions"
    values={[
        { label: 'batch_get_tax_exemptions', value: 'batch_get_tax_exemptions' },
        { label: 'list_tax_exemptions', value: 'list_tax_exemptions' }
    ]}
>
<TabItem value="batch_get_tax_exemptions">

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
    <td><CopyableCode code="failedAccounts" /></td>
    <td><code>array</code></td>
    <td>The list of accounts that failed to get tax exemptions.</td>
</tr>
<tr>
    <td><CopyableCode code="taxExemptionDetailsMap" /></td>
    <td><code>object</code></td>
    <td>The tax exemption details map of accountId and tax exemption details.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tax_exemptions">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results. (pattern: &lt;code&gt;^&#91;-A-Za-z0-9_+\=\/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="taxExemptionDetailsMap" /></td>
    <td><code>object</code></td>
    <td>The tax exemption details map of accountId and tax exemption details.</td>
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
    <td><a href="#batch_get_tax_exemptions"><CopyableCode code="batch_get_tax_exemptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the active tax exemptions for a given list of accounts. The IAM action is tax:GetExemptions.</td>
</tr>
<tr>
    <td><a href="#list_tax_exemptions"><CopyableCode code="list_tax_exemptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the tax exemption of accounts listed in a consolidated billing family. The IAM action is tax:GetExemptions.</td>
</tr>
<tr>
    <td><a href="#put_tax_exemption"><CopyableCode code="put_tax_exemption" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a>, <a href="#parameter-authority"><code>authority</code></a>, <a href="#parameter-exemptionCertificate"><code>exemptionCertificate</code></a>, <a href="#parameter-exemptionType"><code>exemptionType</code></a></td>
    <td></td>
    <td>Adds the tax exemption for a single account or all accounts listed in a consolidated billing family. The IAM action is tax:UpdateExemptions.</td>
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
    defaultValue="batch_get_tax_exemptions"
    values={[
        { label: 'batch_get_tax_exemptions', value: 'batch_get_tax_exemptions' },
        { label: 'list_tax_exemptions', value: 'list_tax_exemptions' }
    ]}
>
<TabItem value="batch_get_tax_exemptions">

Get the active tax exemptions for a given list of accounts. The IAM action is tax:GetExemptions.

```sql
SELECT
failedAccounts,
taxExemptionDetailsMap
FROM aws.taxsettings.tax_exemptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tax_exemptions">

Retrieves the tax exemption of accounts listed in a consolidated billing family. The IAM action is tax:GetExemptions.

```sql
SELECT
nextToken,
taxExemptionDetailsMap
FROM aws.taxsettings.tax_exemptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_tax_exemption"
    values={[
        { label: 'put_tax_exemption', value: 'put_tax_exemption' }
    ]}
>
<TabItem value="put_tax_exemption">

Adds the tax exemption for a single account or all accounts listed in a consolidated billing family. The IAM action is tax:UpdateExemptions.

```sql
REPLACE aws.taxsettings.tax_exemptions
SET 
accountIds = '{{ accountIds }}',
authority = '{{ authority }}',
exemptionCertificate = '{{ exemptionCertificate }}',
exemptionType = '{{ exemptionType }}'
WHERE 
region = '{{ region }}' --required
AND accountIds = '{{ accountIds }}' --required
AND authority = '{{ authority }}' --required
AND exemptionCertificate = '{{ exemptionCertificate }}' --required
AND exemptionType = '{{ exemptionType }}' --required
RETURNING
caseId;
```
</TabItem>
</Tabs>
