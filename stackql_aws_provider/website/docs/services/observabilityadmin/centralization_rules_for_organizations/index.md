--- 
title: centralization_rules_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - centralization_rules_for_organizations
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>centralization_rules_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="centralization_rules_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.centralization_rules_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_centralization_rules_for_organization"
    values={[
        { label: 'list_centralization_rules_for_organization', value: 'list_centralization_rules_for_organization' }
    ]}
>
<TabItem value="list_centralization_rules_for_organization">

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
    <td><CopyableCode code="created_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where the organization centralization rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the organization centralization rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Account that created the organization centralization rule.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_account_id" /></td>
    <td><code>string</code></td>
    <td>The primary destination account of the organization centralization rule.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_region" /></td>
    <td><code>string</code></td>
    <td>The primary destination region of the organization centralization rule.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason why an organization centralization rule is marked UNHEALTHY. (TRUSTED_ACCESS_NOT_ENABLED, DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION, INTERNAL_SERVER_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the organization centralization rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the organization centralization rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_health" /></td>
    <td><code>string</code></td>
    <td>The health status of the organization centralization rule. (Healthy, Unhealthy, Provisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the organization centralization rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_centralization_rules_for_organization"><CopyableCode code="list_centralization_rules_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all centralization rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
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
    defaultValue="list_centralization_rules_for_organization"
    values={[
        { label: 'list_centralization_rules_for_organization', value: 'list_centralization_rules_for_organization' }
    ]}
>
<TabItem value="list_centralization_rules_for_organization">

Lists all centralization rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
SELECT
created_region,
created_time_stamp,
creator_account_id,
destination_account_id,
destination_region,
failure_reason,
last_update_time_stamp,
rule_arn,
rule_health,
rule_name
FROM aws.observabilityadmin.centralization_rules_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
