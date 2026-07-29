--- 
title: regex_match_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - regex_match_sets
  - waf_regional
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

Creates, updates, deletes, gets or lists a <code>regex_match_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regex_match_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.regex_match_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_regex_match_set"
    values={[
        { label: 'get_regex_match_set', value: 'get_regex_match_set' },
        { label: 'list_regex_match_sets', value: 'list_regex_match_sets' }
    ]}
>
<TabItem value="get_regex_match_set">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the RegexMatchSet. You can't change Name after you create a RegexMatchSet. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_match_set_id" /></td>
    <td><code>string</code></td>
    <td>The RegexMatchSetId for a RegexMatchSet. You use RegexMatchSetId to get information about a RegexMatchSet (see GetRegexMatchSet), update a RegexMatchSet (see UpdateRegexMatchSet), insert a RegexMatchSet into a Rule or delete one from a Rule (see UpdateRule), and delete a RegexMatchSet from AWS WAF (see DeleteRegexMatchSet). RegexMatchSetId is returned by CreateRegexMatchSet and by ListRegexMatchSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_match_tuples" /></td>
    <td><code>array</code></td>
    <td>Contains an array of RegexMatchTuple objects. Each RegexMatchTuple object contains: The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the User-Agent header. The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet. Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_regex_match_sets">

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
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If you have more RegexMatchSet objects than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more RegexMatchSet objects, submit another ListRegexMatchSets request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_match_sets" /></td>
    <td><code>array</code></td>
    <td>An array of RegexMatchSetSummary objects.</td>
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
    <td><a href="#get_regex_match_set"><CopyableCode code="get_regex_match_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RegexMatchSet specified by RegexMatchSetId.</td>
</tr>
<tr>
    <td><a href="#list_regex_match_sets"><CopyableCode code="list_regex_match_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RegexMatchSetSummary objects.</td>
</tr>
<tr>
    <td><a href="#create_regex_match_set"><CopyableCode code="create_regex_match_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RegexMatchSet. You then use UpdateRegexMatchSet to identify the part of a web request that you want AWS WAF to inspect, such as the values of the User-Agent header or the query string. For example, you can create a RegexMatchSet that contains a RegexMatchTuple that looks for any requests with User-Agent headers that match a RegexPatternSet with pattern B&#91;a@&#93;dB&#91;o0&#93;t. You can then configure AWS WAF to reject those requests. To create and configure a RegexMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRegexMatchSet request. Submit a CreateRegexMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexMatchSet request. Submit an UpdateRegexMatchSet request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a RegexPatternSet, that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_regex_match_set"><CopyableCode code="update_regex_match_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegexMatchSetId"><code>RegexMatchSetId</code></a>, <a href="#parameter-Updates"><code>Updates</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet. For each RegexMatchSetUpdate object, you specify the following values: Whether to insert or delete the object from the array. If you want to change a RegexMatchSetUpdate object, you delete the existing object and add a new one. The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the User-Agent header. The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet. Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string. For example, you can create a RegexPatternSet that matches any requests with User-Agent headers that contain the string B&#91;a@&#93;dB&#91;o0&#93;t. You can then configure AWS WAF to reject those requests. To create and configure a RegexMatchSet, perform the following steps: Create a RegexMatchSet. For more information, see CreateRegexMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexMatchSet request. Submit an UpdateRegexMatchSet request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the RegexPatternSet that contain the regular expression patters you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_regex_match_set"><CopyableCode code="delete_regex_match_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RegexMatchSet. You can't delete a RegexMatchSet if it's still used in any Rules or if it still includes any RegexMatchTuples objects (any filters). If you just want to remove a RegexMatchSet from a Rule, use UpdateRule. To permanently delete a RegexMatchSet, perform the following steps: Update the RegexMatchSet to remove filters, if any. For more information, see UpdateRegexMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRegexMatchSet request. Submit a DeleteRegexMatchSet request.</td>
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
    defaultValue="get_regex_match_set"
    values={[
        { label: 'get_regex_match_set', value: 'get_regex_match_set' },
        { label: 'list_regex_match_sets', value: 'list_regex_match_sets' }
    ]}
>
<TabItem value="get_regex_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RegexMatchSet specified by RegexMatchSetId.

```sql
SELECT
name,
regex_match_set_id,
regex_match_tuples
FROM aws.waf_regional.regex_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_regex_match_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RegexMatchSetSummary objects.

```sql
SELECT
next_marker,
regex_match_sets
FROM aws.waf_regional.regex_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_regex_match_set"
    values={[
        { label: 'create_regex_match_set', value: 'create_regex_match_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_regex_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RegexMatchSet. You then use UpdateRegexMatchSet to identify the part of a web request that you want AWS WAF to inspect, such as the values of the User-Agent header or the query string. For example, you can create a RegexMatchSet that contains a RegexMatchTuple that looks for any requests with User-Agent headers that match a RegexPatternSet with pattern B[a@]dB[o0]t. You can then configure AWS WAF to reject those requests. To create and configure a RegexMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRegexMatchSet request. Submit a CreateRegexMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexMatchSet request. Submit an UpdateRegexMatchSet request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a RegexPatternSet, that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.regex_match_sets (
Name,
ChangeToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ region }}'
RETURNING
change_token,
regex_match_set
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: regex_match_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the regex_match_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the RegexMatchSet. You can't change Name after you create a RegexMatchSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_regex_match_set"
    values={[
        { label: 'update_regex_match_set', value: 'update_regex_match_set' }
    ]}
>
<TabItem value="update_regex_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet. For each RegexMatchSetUpdate object, you specify the following values: Whether to insert or delete the object from the array. If you want to change a RegexMatchSetUpdate object, you delete the existing object and add a new one. The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the User-Agent header. The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet. Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string. For example, you can create a RegexPatternSet that matches any requests with User-Agent headers that contain the string B[a@]dB[o0]t. You can then configure AWS WAF to reject those requests. To create and configure a RegexMatchSet, perform the following steps: Create a RegexMatchSet. For more information, see CreateRegexMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexMatchSet request. Submit an UpdateRegexMatchSet request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the RegexPatternSet that contain the regular expression patters you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.regex_match_sets
SET 
RegexMatchSetId = '{{ RegexMatchSetId }}',
Updates = '{{ Updates }}',
ChangeToken = '{{ ChangeToken }}'
WHERE 
region = '{{ region }}' --required
AND RegexMatchSetId = '{{ RegexMatchSetId }}' --required
AND Updates = '{{ Updates }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
RETURNING
change_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_regex_match_set"
    values={[
        { label: 'delete_regex_match_set', value: 'delete_regex_match_set' }
    ]}
>
<TabItem value="delete_regex_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RegexMatchSet. You can't delete a RegexMatchSet if it's still used in any Rules or if it still includes any RegexMatchTuples objects (any filters). If you just want to remove a RegexMatchSet from a Rule, use UpdateRule. To permanently delete a RegexMatchSet, perform the following steps: Update the RegexMatchSet to remove filters, if any. For more information, see UpdateRegexMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRegexMatchSet request. Submit a DeleteRegexMatchSet request.

```sql
DELETE FROM aws.waf_regional.regex_match_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
