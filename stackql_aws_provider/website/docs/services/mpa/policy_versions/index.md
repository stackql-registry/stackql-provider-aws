--- 
title: policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_versions
  - mpa
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

Creates, updates, deletes, gets or lists a <code>policy_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.policy_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the team. (pattern: &lt;code&gt;arn:.&#123;1,63&#125;:mpa:::aws:policy/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/(?:&#91;\d&#93;+|\$DEFAULT)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="document" /></td>
    <td><code>string</code></td>
    <td>Document that contains the policy contents.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the specified policy is the default for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the policy. (pattern: &lt;code&gt;arn:.&#123;1,63&#125;:mpa:::aws:policy/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_type" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (AWS_MANAGED, AWS_RAM)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the policy. For example, if the policy is attachable or deprecated. (ATTACHABLE, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>integer</code></td>
    <td>Verison ID</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_versions">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the team. (pattern: &lt;code&gt;arn:.&#123;1,63&#125;:mpa:::aws:policy/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/(?:&#91;\d&#93;+|\$DEFAULT)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the specified policy is the default for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the policy. (pattern: &lt;code&gt;arn:.&#123;1,63&#125;:mpa:::aws:policy/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;/&#91;a-zA-Z0-9_\.-&#93;&#123;1,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_type" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (AWS_MANAGED, AWS_RAM)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the policy. For example, if the policy is attachable or deprecated. (ATTACHABLE, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>integer</code></td>
    <td>Version ID for the policy.</td>
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
    <td><a href="#get_policy_version"><CopyableCode code="get_policy_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_version_arn"><code>policy_version_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for the version of a policy. Policies define the permissions for team resources.</td>
</tr>
<tr>
    <td><a href="#list_policy_versions"><CopyableCode code="list_policy_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of the versions for policies. Policies define the permissions for team resources.</td>
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
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the policy.</td>
</tr>
<tr id="parameter-policy_version_arn">
    <td><CopyableCode code="policy_version_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response. If more results exist than the specified MaxResults value, a token is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a next call to the operation to get more output. You can repeat this until the NextToken response element returns null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

Returns details for the version of a policy. Policies define the permissions for team resources.

```sql
SELECT
arn,
creation_time,
document,
is_default,
last_updated_time,
name,
policy_arn,
policy_type,
status,
version_id
FROM aws.mpa.policy_versions
WHERE policy_version_arn = '{{ policy_version_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_versions">

Returns a list of the versions for policies. Policies define the permissions for team resources.

```sql
SELECT
arn,
creation_time,
is_default,
last_updated_time,
name,
policy_arn,
policy_type,
status,
version_id
FROM aws.mpa.policy_versions
WHERE policy_arn = '{{ policy_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
