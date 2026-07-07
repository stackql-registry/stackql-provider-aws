--- 
title: context_keys_for_custom_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - context_keys_for_custom_policies
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

Creates, updates, deletes, gets or lists a <code>context_keys_for_custom_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="context_keys_for_custom_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.context_keys_for_custom_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_context_keys_for_custom_policy"
    values={[
        { label: 'get_context_keys_for_custom_policy', value: 'get_context_keys_for_custom_policy' }
    ]}
>
<TabItem value="get_context_keys_for_custom_policy">

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
    <td><a href="#get_context_keys_for_custom_policy"><CopyableCode code="get_context_keys_for_custom_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicyInputList"><code>PolicyInputList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use GetContextKeysForPrincipalPolicy. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use GetContextKeysForCustomPolicy to understand what key names and values you must supply when you call SimulateCustomPolicy. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</td>
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
<tr id="parameter-PolicyInputList">
    <td><CopyableCode code="PolicyInputList" /></td>
    <td><code>array</code></td>
    <td>A list of policies for which you want the list of context keys referenced in those policies. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_context_keys_for_custom_policy"
    values={[
        { label: 'get_context_keys_for_custom_policy', value: 'get_context_keys_for_custom_policy' }
    ]}
>
<TabItem value="get_context_keys_for_custom_policy">

Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use GetContextKeysForPrincipalPolicy. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use GetContextKeysForCustomPolicy to understand what key names and values you must supply when you call SimulateCustomPolicy. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.

```sql
SELECT
context_key_name
FROM aws.iam.context_keys_for_custom_policies
WHERE PolicyInputList = '{{ PolicyInputList }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
