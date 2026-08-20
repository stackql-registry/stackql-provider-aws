--- 
title: billing_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_preferences
  - billing
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

Creates, updates, deletes, gets or lists a <code>billing_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.billing_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_billing_preferences"
    values={[
        { label: 'get_billing_preferences', value: 'get_billing_preferences' }
    ]}
>
<TabItem value="get_billing_preferences">

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
    <td><CopyableCode code="billing_preferences" /></td>
    <td><code>array</code></td>
    <td>The list of preference entries matching the request.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Pagination token. Present when more pages are available; null when there are no more results. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9+=/_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_billing_preferences"><CopyableCode code="get_billing_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves billing preferences for the specified feature. Each feature controls a distinct billing capability: which accounts can share Reserved Instances or credits, whether billing alerts are enabled, the historical record of sharing changes, and per-credit options.</td>
</tr>
<tr>
    <td><a href="#update_billing_preferences"><CopyableCode code="update_billing_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-feature"><code>feature</code></a>, <a href="#parameter-billingPreferencesPerKey"><code>billingPreferencesPerKey</code></a></td>
    <td></td>
    <td>Updates billing preferences for the specified feature. Each feature targets a distinct billing capability and has its own set of supported keys. The action sets the value for each provided key; keys not present in the request are unchanged. Sharing keys (RI_SHARING, CREDIT_SHARING, CREDIT_LEVEL_SHARING, and sharing keys under CREDIT_PREFERENCE_OPTIONS) may only be set by the management account of a consolidated billing family. The credit/&#123;creditId&#125;/status key may be set by member accounts for credits they own, or by the management account for any credit in the family.</td>
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
    defaultValue="get_billing_preferences"
    values={[
        { label: 'get_billing_preferences', value: 'get_billing_preferences' }
    ]}
>
<TabItem value="get_billing_preferences">

Retrieves billing preferences for the specified feature. Each feature controls a distinct billing capability: which accounts can share Reserved Instances or credits, whether billing alerts are enabled, the historical record of sharing changes, and per-credit options.

```sql
SELECT
billing_preferences,
next_token
FROM aws.billing.billing_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_billing_preferences"
    values={[
        { label: 'update_billing_preferences', value: 'update_billing_preferences' }
    ]}
>
<TabItem value="update_billing_preferences">

Updates billing preferences for the specified feature. Each feature targets a distinct billing capability and has its own set of supported keys. The action sets the value for each provided key; keys not present in the request are unchanged. Sharing keys (RI_SHARING, CREDIT_SHARING, CREDIT_LEVEL_SHARING, and sharing keys under CREDIT_PREFERENCE_OPTIONS) may only be set by the management account of a consolidated billing family. The credit/&#123;creditId&#125;/status key may be set by member accounts for credits they own, or by the management account for any credit in the family.

```sql
UPDATE aws.billing.billing_preferences
SET 
feature = '{{ feature }}',
billingPreferencesPerKey = '{{ billingPreferencesPerKey }}'
WHERE 
region = '{{ region }}' --required
AND feature = '{{ feature }}' --required
AND billingPreferencesPerKey = '{{ billingPreferencesPerKey }}' --required;
```
</TabItem>
</Tabs>
