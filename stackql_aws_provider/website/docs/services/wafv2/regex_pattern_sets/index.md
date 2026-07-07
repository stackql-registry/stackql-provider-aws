--- 
title: regex_pattern_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - regex_pattern_sets
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>regex_pattern_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regex_pattern_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.regex_pattern_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_regex_pattern_set"
    values={[
        { label: 'get_regex_pattern_set', value: 'get_regex_pattern_set' },
        { label: 'list_regex_pattern_sets', value: 'list_regex_pattern_sets' }
    ]}
>
<TabItem value="get_regex_pattern_set">

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
    <td><CopyableCode code="LockToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RegexPatternSet" /></td>
    <td><code>object</code></td>
    <td>Contains one or more regular expressions. WAF assigns an ARN to each RegexPatternSet that you create. To use a set in a rule, you provide the ARN to the Rule statement RegexPatternSetReferenceStatement.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_regex_pattern_sets">

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
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RegexPatternSets" /></td>
    <td><code>array</code></td>
    <td>Array of regex pattern sets. If you specified a Limit in your request, this might not be the full list.</td>
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
    <td><a href="#get_regex_pattern_set"><CopyableCode code="get_regex_pattern_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified RegexPatternSet.</td>
</tr>
<tr>
    <td><a href="#list_regex_pattern_sets"><CopyableCode code="list_regex_pattern_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.</td>
</tr>
<tr>
    <td><a href="#create_regex_pattern_set"><CopyableCode code="create_regex_pattern_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-RegularExpressionList"><code>RegularExpressionList</code></a></td>
    <td></td>
    <td>Creates a RegexPatternSet, which you reference in a RegexPatternSetReferenceStatement, to have WAF inspect a web request component for the specified patterns.</td>
</tr>
<tr>
    <td><a href="#update_regex_pattern_set"><CopyableCode code="update_regex_pattern_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-RegularExpressionList"><code>RegularExpressionList</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a></td>
    <td></td>
    <td>Updates the specified RegexPatternSet. This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. To modify a regex pattern set, do the following: Retrieve it by calling GetRegexPatternSet Update its settings as needed Provide the complete regex pattern set specification to this call Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</td>
</tr>
<tr>
    <td><a href="#delete_regex_pattern_set"><CopyableCode code="delete_regex_pattern_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified RegexPatternSet.</td>
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
    defaultValue="get_regex_pattern_set"
    values={[
        { label: 'get_regex_pattern_set', value: 'get_regex_pattern_set' },
        { label: 'list_regex_pattern_sets', value: 'list_regex_pattern_sets' }
    ]}
>
<TabItem value="get_regex_pattern_set">

Retrieves the specified RegexPatternSet.

```sql
SELECT
LockToken,
RegexPatternSet
FROM aws.wafv2.regex_pattern_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_regex_pattern_sets">

Retrieves an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.

```sql
SELECT
NextMarker,
RegexPatternSets
FROM aws.wafv2.regex_pattern_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_regex_pattern_set"
    values={[
        { label: 'create_regex_pattern_set', value: 'create_regex_pattern_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_regex_pattern_set">

Creates a RegexPatternSet, which you reference in a RegexPatternSetReferenceStatement, to have WAF inspect a web request component for the specified patterns.

```sql
INSERT INTO aws.wafv2.regex_pattern_sets (
Name,
Scope,
Description,
RegularExpressionList,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Scope }}' /* required */,
'{{ Description }}',
'{{ RegularExpressionList }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: regex_pattern_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the regex_pattern_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the set. You cannot change the name after you create the set.
    - name: Scope
      value: "{{ Scope }}"
      description: |
        Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
      valid_values: ['CLOUDFRONT', 'REGIONAL']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the set that helps with identification.
    - name: RegularExpressionList
      description: |
        Array of regular expression strings.
      value:
        - RegexString: "{{ RegexString }}"
    - name: Tags
      description: |
        An array of key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_regex_pattern_set"
    values={[
        { label: 'update_regex_pattern_set', value: 'update_regex_pattern_set' }
    ]}
>
<TabItem value="update_regex_pattern_set">

Updates the specified RegexPatternSet. This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. To modify a regex pattern set, do the following: Retrieve it by calling GetRegexPatternSet Update its settings as needed Provide the complete regex pattern set specification to this call Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.

```sql
UPDATE aws.wafv2.regex_pattern_sets
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
Description = '{{ Description }}',
RegularExpressionList = '{{ RegularExpressionList }}',
LockToken = '{{ LockToken }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND RegularExpressionList = '{{ RegularExpressionList }}' --required
AND LockToken = '{{ LockToken }}' --required
RETURNING
NextLockToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_regex_pattern_set"
    values={[
        { label: 'delete_regex_pattern_set', value: 'delete_regex_pattern_set' }
    ]}
>
<TabItem value="delete_regex_pattern_set">

Deletes the specified RegexPatternSet.

```sql
DELETE FROM aws.wafv2.regex_pattern_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
