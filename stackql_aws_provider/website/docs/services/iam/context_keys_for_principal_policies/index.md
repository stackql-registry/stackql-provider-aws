--- 
title: context_keys_for_principal_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - context_keys_for_principal_policies
  - iam
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

Creates, updates, deletes, gets or lists a <code>context_keys_for_principal_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="context_keys_for_principal_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.context_keys_for_principal_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_context_keys_for_principal_policy"
    values={[
        { label: 'get_context_keys_for_principal_policy', value: 'get_context_keys_for_principal_policy' }
    ]}
>
<TabItem value="get_context_keys_for_principal_policy">

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
    <td><CopyableCode code="context_key_name" /></td>
    <td><code>string</code></td>
    <td>The list of context keys that are referenced in the input policies.</td>
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
    <td><a href="#get_context_keys_for_principal_policy"><CopyableCode code="get_context_keys_for_principal_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicySourceArn"><code>PolicySourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyInputList"><code>PolicyInputList</code></a></td>
    <td>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of. You can optionally include a list of one or more additional policies, specified as strings. If you want to include only a list of policies by string, use GetContextKeysForCustomPolicy instead. Note: This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use GetContextKeysForCustomPolicy instead. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy to understand what key names and values you must supply when you call SimulatePrincipalPolicy.</td>
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
<tr id="parameter-PolicySourceArn">
    <td><CopyableCode code="PolicySourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a user, group, or role whose policies contain the context keys that you want listed. If you specify a user, the list includes context keys that are found in all policies that are attached to the user. The list also includes all groups that the user is a member of. If you pick a group or a role, then it includes only those context keys that are found in policies attached to that entity. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-PolicyInputList">
    <td><CopyableCode code="PolicyInputList" /></td>
    <td><code>array</code></td>
    <td>An optional list of additional policies for which you want the list of context keys that are referenced. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_context_keys_for_principal_policy"
    values={[
        { label: 'get_context_keys_for_principal_policy', value: 'get_context_keys_for_principal_policy' }
    ]}
>
<TabItem value="get_context_keys_for_principal_policy">

Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of. You can optionally include a list of one or more additional policies, specified as strings. If you want to include only a list of policies by string, use GetContextKeysForCustomPolicy instead. Note: This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use GetContextKeysForCustomPolicy instead. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy to understand what key names and values you must supply when you call SimulatePrincipalPolicy.

```sql
SELECT
context_key_name
FROM aws.iam.context_keys_for_principal_policies
WHERE PolicySourceArn = '{{ PolicySourceArn }}' -- required
AND region = '{{ region }}' -- required
AND PolicyInputList = '{{ PolicyInputList }}'
;
```
</TabItem>
</Tabs>
