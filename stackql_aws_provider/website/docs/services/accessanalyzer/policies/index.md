--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - accessanalyzer
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#check_access_not_granted"><CopyableCode code="check_access_not_granted" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a>, <a href="#parameter-access"><code>access</code></a>, <a href="#parameter-policyType"><code>policyType</code></a></td>
    <td></td>
    <td>Checks whether the specified access isn't allowed by a policy.</td>
</tr>
<tr>
    <td><a href="#check_no_new_access"><CopyableCode code="check_no_new_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-newPolicyDocument"><code>newPolicyDocument</code></a>, <a href="#parameter-existingPolicyDocument"><code>existingPolicyDocument</code></a>, <a href="#parameter-policyType"><code>policyType</code></a></td>
    <td></td>
    <td>Checks whether new access is allowed for an updated policy when compared to the existing policy. You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the IAM Access Analyzer custom policy checks samples repository on GitHub. The reference policies in this repository are meant to be passed to the existingPolicyDocument request parameter.</td>
</tr>
<tr>
    <td><a href="#check_no_public_access"><CopyableCode code="check_no_public_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td></td>
    <td>Checks whether a resource policy can grant public access to the specified resource type.</td>
</tr>
<tr>
    <td><a href="#validate_policy"><CopyableCode code="validate_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a>, <a href="#parameter-policyType"><code>policyType</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="check_access_not_granted"
    values={[
        { label: 'check_access_not_granted', value: 'check_access_not_granted' },
        { label: 'check_no_new_access', value: 'check_no_new_access' },
        { label: 'check_no_public_access', value: 'check_no_public_access' },
        { label: 'validate_policy', value: 'validate_policy' }
    ]}
>
<TabItem value="check_access_not_granted">

Checks whether the specified access isn't allowed by a policy.

```sql
EXEC aws.accessanalyzer.policies.check_access_not_granted 
@region='{{ region }}' --required 
@@json=
'{
"policyDocument": "{{ policyDocument }}", 
"access": "{{ access }}", 
"policyType": "{{ policyType }}"
}'
;
```
</TabItem>
<TabItem value="check_no_new_access">

Checks whether new access is allowed for an updated policy when compared to the existing policy. You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the IAM Access Analyzer custom policy checks samples repository on GitHub. The reference policies in this repository are meant to be passed to the existingPolicyDocument request parameter.

```sql
EXEC aws.accessanalyzer.policies.check_no_new_access 
@region='{{ region }}' --required 
@@json=
'{
"newPolicyDocument": "{{ newPolicyDocument }}", 
"existingPolicyDocument": "{{ existingPolicyDocument }}", 
"policyType": "{{ policyType }}"
}'
;
```
</TabItem>
<TabItem value="check_no_public_access">

Checks whether a resource policy can grant public access to the specified resource type.

```sql
EXEC aws.accessanalyzer.policies.check_no_public_access 
@region='{{ region }}' --required 
@@json=
'{
"policyDocument": "{{ policyDocument }}", 
"resourceType": "{{ resourceType }}"
}'
;
```
</TabItem>
<TabItem value="validate_policy">

Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices.

```sql
EXEC aws.accessanalyzer.policies.validate_policy 
@region='{{ region }}' --required, 
@maxResults='{{ maxResults }}', 
@nextToken='{{ nextToken }}' 
@@json=
'{
"locale": "{{ locale }}", 
"policyDocument": "{{ policyDocument }}", 
"policyType": "{{ policyType }}", 
"validatePolicyResourceType": "{{ validatePolicyResourceType }}"
}'
;
```
</TabItem>
</Tabs>
