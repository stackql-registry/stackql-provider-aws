--- 
title: targets_for_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - targets_for_policies
  - organizations
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

Creates, updates, deletes, gets or lists a <code>targets_for_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets_for_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.targets_for_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_targets_for_policy"
    values={[
        { label: 'list_targets_for_policy', value: 'list_targets_for_policy' }
    ]}
>
<TabItem value="list_targets_for_policy">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy target. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the policy target. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the policy target. The regex pattern for a target ID string requires one of the following: Root - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits. Account - A string that consists of exactly 12 digits. Organizational unit (OU) - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. (pattern: &lt;code&gt;^(r-&#91;0-9a-z&#93;&#123;4,32&#125;)|(\d&#123;12&#125;)|(ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the policy target. (ACCOUNT, ORGANIZATIONAL_UNIT, ROOT)</td>
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
    <td><a href="#list_targets_for_policy"><CopyableCode code="list_targets_for_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_targets_for_policy"
    values={[
        { label: 'list_targets_for_policy', value: 'list_targets_for_policy' }
    ]}
>
<TabItem value="list_targets_for_policy">

Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
Name,
TargetId,
Type
FROM aws.organizations.targets_for_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
