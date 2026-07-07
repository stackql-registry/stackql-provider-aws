--- 
title: policies_for_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_for_targets
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

Creates, updates, deletes, gets or lists a <code>policies_for_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies_for_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.policies_for_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policies_for_target"
    values={[
        { label: 'list_policies_for_target', value: 'list_policies_for_target' }
    ]}
>
<TabItem value="list_policies_for_target">

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
    <td>The Amazon Resource Name (ARN) of the policy. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^(arn:aws:organizations::\d&#123;12&#125;:policy\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/&#91;0-9a-z_&#93;+\/p-&#91;0-9a-z&#93;&#123;10,32&#125;)|(arn:aws:organizations::aws:policy\/&#91;0-9a-z_&#93;+\/p-&#91;0-9a-zA-Z_&#93;&#123;10,128&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsManaged" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that indicates whether the specified policy is an Amazon Web Services managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the policy. The regex pattern for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_). (pattern: &lt;code&gt;^p-&#91;0-9a-zA-Z_&#93;&#123;8,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the policy. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (SERVICE_CONTROL_POLICY, RESOURCE_CONTROL_POLICY, TAG_POLICY, BACKUP_POLICY, AISERVICES_OPT_OUT_POLICY, CHATBOT_POLICY, DECLARATIVE_POLICY_EC2, SECURITYHUB_POLICY, INSPECTOR_POLICY, UPGRADE_ROLLOUT_POLICY, BEDROCK_POLICY, S3_POLICY, NETWORK_SECURITY_DIRECTOR_POLICY)</td>
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
    <td><a href="#list_policies_for_target"><CopyableCode code="list_policies_for_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_policies_for_target"
    values={[
        { label: 'list_policies_for_target', value: 'list_policies_for_target' }
    ]}
>
<TabItem value="list_policies_for_target">

Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
AwsManaged,
Description,
Id,
Name,
Type
FROM aws.organizations.policies_for_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
