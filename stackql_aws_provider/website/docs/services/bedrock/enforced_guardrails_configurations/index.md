--- 
title: enforced_guardrails_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - enforced_guardrails_configurations
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>enforced_guardrails_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enforced_guardrails_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.enforced_guardrails_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_enforced_guardrails_configuration"
    values={[
        { label: 'list_enforced_guardrails_configuration', value: 'list_enforced_guardrails_configuration' }
    ]}
>
<TabItem value="list_enforced_guardrails_configuration">

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
    <td><CopyableCode code="config_id" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the account enforced configuration. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role used to update the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_arn" /></td>
    <td><code>string</code></td>
    <td>ARN representation for the guardrail. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:guardrail/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_id" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the guardrail. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_version" /></td>
    <td><code>string</code></td>
    <td>Numerical guardrail version. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;&#123;0,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_tags" /></td>
    <td><code>string</code></td>
    <td>Whether to honor or ignore input tags at runtime. (HONOR, IGNORE)</td>
</tr>
<tr>
    <td><CopyableCode code="model_enforcement" /></td>
    <td><code>object</code></td>
    <td>Model-specific information for the enforced guardrail configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Configuration owner type. (ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="selective_content_guarding" /></td>
    <td><code>object</code></td>
    <td>Selective content guarding controls for enforced guardrails.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role used to update the configuration.</td>
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
    <td><a href="#list_enforced_guardrails_configuration"><CopyableCode code="list_enforced_guardrails_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the account-level enforced guardrail configurations.</td>
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
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Opaque continuation token of previous paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_enforced_guardrails_configuration"
    values={[
        { label: 'list_enforced_guardrails_configuration', value: 'list_enforced_guardrails_configuration' }
    ]}
>
<TabItem value="list_enforced_guardrails_configuration">

Lists the account-level enforced guardrail configurations.

```sql
SELECT
config_id,
created_at,
created_by,
guardrail_arn,
guardrail_id,
guardrail_version,
input_tags,
model_enforcement,
owner,
selective_content_guarding,
updated_at,
updated_by
FROM aws.bedrock.enforced_guardrails_configurations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
