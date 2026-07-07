--- 
title: third_party_firewall_firewall_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - third_party_firewall_firewall_policies
  - fms
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

Creates, updates, deletes, gets or lists a <code>third_party_firewall_firewall_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="third_party_firewall_firewall_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.third_party_firewall_firewall_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_third_party_firewall_firewall_policies"
    values={[
        { label: 'list_third_party_firewall_firewall_policies', value: 'list_third_party_firewall_firewall_policies' }
    ]}
>
<TabItem value="list_third_party_firewall_firewall_policies">

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
    <td><CopyableCode code="FirewallPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the specified firewall policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FirewallPolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the specified firewall policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#list_third_party_firewall_firewall_policies"><CopyableCode code="list_third_party_firewall_firewall_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.</td>
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
    defaultValue="list_third_party_firewall_firewall_policies"
    values={[
        { label: 'list_third_party_firewall_firewall_policies', value: 'list_third_party_firewall_firewall_policies' }
    ]}
>
<TabItem value="list_third_party_firewall_firewall_policies">

Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.

```sql
SELECT
FirewallPolicyId,
FirewallPolicyName
FROM aws.fms.third_party_firewall_firewall_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
