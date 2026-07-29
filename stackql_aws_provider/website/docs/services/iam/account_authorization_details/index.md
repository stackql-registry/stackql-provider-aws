--- 
title: account_authorization_details
hide_title: false
hide_table_of_contents: false
keywords:
  - account_authorization_details
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

Creates, updates, deletes, gets or lists an <code>account_authorization_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_authorization_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.account_authorization_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_authorization_details"
    values={[
        { label: 'get_account_authorization_details', value: 'get_account_authorization_details' }
    ]}
>
<TabItem value="get_account_authorization_details">

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
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="attached_managed_policies" /></td>
    <td><code>string</code></td>
    <td>A list of the managed policies attached to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="group_list" /></td>
    <td><code>string</code></td>
    <td>A list of IAM groups that the user is in.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the user. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_boundary" /></td>
    <td><code>string</code></td>
    <td>The ARN of the policy used to set the permissions boundary for the user. For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are associated with the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the user. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name identifying the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_policy_list" /></td>
    <td><code>string</code></td>
    <td>A list of the inline policies embedded in the user.</td>
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
    <td><a href="#get_account_authorization_details"><CopyableCode code="get_account_authorization_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. You can optionally filter the results using the Filter parameter. You can paginate the results using the MaxItems and Marker parameters.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>A list of entity types used to filter the results. Only the entities that match the types you specify are included in the output. Use the value LocalManagedPolicy to include customer managed policies. The format for this parameter is a comma-separated (if more than one) list of strings. Each string value in the list must be one of the valid values listed below.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_authorization_details"
    values={[
        { label: 'get_account_authorization_details', value: 'get_account_authorization_details' }
    ]}
>
<TabItem value="get_account_authorization_details">

Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account. Policies returned by this operation are URL-encoded compliant with RFC 3986. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the decode method of the java.net.URLDecoder utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically. You can optionally filter the results using the Filter parameter. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
arn,
attached_managed_policies,
create_date,
group_list,
path,
permissions_boundary,
tags,
user_id,
user_name,
user_policy_list
FROM aws.iam.account_authorization_details
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
