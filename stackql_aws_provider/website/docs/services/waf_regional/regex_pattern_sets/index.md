--- 
title: regex_pattern_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - regex_pattern_sets
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

Creates, updates, deletes, gets or lists a <code>regex_pattern_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regex_pattern_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.regex_pattern_sets" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the RegexPatternSet. You can't change Name after you create a RegexPatternSet. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_pattern_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the RegexPatternSet. You use RegexPatternSetId to get information about a RegexPatternSet, update a RegexPatternSet, remove a RegexPatternSet from a RegexMatchSet, and delete a RegexPatternSet from AWS WAF. RegexMatchSetId is returned by CreateRegexPatternSet and by ListRegexPatternSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_pattern_strings" /></td>
    <td><code>array</code></td>
    <td>Specifies the regular expression (regex) patterns that you want AWS WAF to search for, such as B&#91;a@&#93;dB&#91;o0&#93;t.</td>
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
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If you have more RegexPatternSet objects than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more RegexPatternSet objects, submit another ListRegexPatternSets request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regex_pattern_sets" /></td>
    <td><code>array</code></td>
    <td>An array of RegexPatternSetSummary objects.</td>
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
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RegexPatternSet specified by RegexPatternSetId.</td>
</tr>
<tr>
    <td><a href="#list_regex_pattern_sets"><CopyableCode code="list_regex_pattern_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RegexPatternSetSummary objects.</td>
</tr>
<tr>
    <td><a href="#create_regex_pattern_set"><CopyableCode code="create_regex_pattern_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RegexPatternSet. You then use UpdateRegexPatternSet to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as B&#91;a@&#93;dB&#91;o0&#93;t. You can then configure AWS WAF to reject those requests. To create and configure a RegexPatternSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRegexPatternSet request. Submit a CreateRegexPatternSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexPatternSet request. Submit an UpdateRegexPatternSet request to specify the string that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_regex_pattern_set"><CopyableCode code="update_regex_pattern_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegexPatternSetId"><code>RegexPatternSetId</code></a>, <a href="#parameter-Updates"><code>Updates</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes RegexPatternString objects in a RegexPatternSet. For each RegexPatternString object, you specify the following values: Whether to insert or delete the RegexPatternString. The regular expression pattern that you want to insert or delete. For more information, see RegexPatternSet. For example, you can create a RegexPatternString such as B&#91;a@&#93;dB&#91;o0&#93;t. AWS WAF will match this RegexPatternString to: BadBot BadB0t B@dBot B@dB0t To create and configure a RegexPatternSet, perform the following steps: Create a RegexPatternSet. For more information, see CreateRegexPatternSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexPatternSet request. Submit an UpdateRegexPatternSet request to specify the regular expression pattern that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_regex_pattern_set"><CopyableCode code="delete_regex_pattern_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RegexPatternSet. You can't delete a RegexPatternSet if it's still used in any RegexMatchSet or if the RegexPatternSet is not empty.</td>
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

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RegexPatternSet specified by RegexPatternSetId.

```sql
SELECT
name,
regex_pattern_set_id,
regex_pattern_strings
FROM aws.waf_regional.regex_pattern_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_regex_pattern_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RegexPatternSetSummary objects.

```sql
SELECT
next_marker,
regex_pattern_sets
FROM aws.waf_regional.regex_pattern_sets
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

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RegexPatternSet. You then use UpdateRegexPatternSet to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as B[a@]dB[o0]t. You can then configure AWS WAF to reject those requests. To create and configure a RegexPatternSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRegexPatternSet request. Submit a CreateRegexPatternSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexPatternSet request. Submit an UpdateRegexPatternSet request to specify the string that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.regex_pattern_sets (
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
regex_pattern_set
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
        A friendly name or description of the RegexPatternSet. You can't change Name after you create a RegexPatternSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
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

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes RegexPatternString objects in a RegexPatternSet. For each RegexPatternString object, you specify the following values: Whether to insert or delete the RegexPatternString. The regular expression pattern that you want to insert or delete. For more information, see RegexPatternSet. For example, you can create a RegexPatternString such as B[a@]dB[o0]t. AWS WAF will match this RegexPatternString to: BadBot BadB0t B@dBot B@dB0t To create and configure a RegexPatternSet, perform the following steps: Create a RegexPatternSet. For more information, see CreateRegexPatternSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRegexPatternSet request. Submit an UpdateRegexPatternSet request to specify the regular expression pattern that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.regex_pattern_sets
SET 
RegexPatternSetId = '{{ RegexPatternSetId }}',
Updates = '{{ Updates }}',
ChangeToken = '{{ ChangeToken }}'
WHERE 
region = '{{ region }}' --required
AND RegexPatternSetId = '{{ RegexPatternSetId }}' --required
AND Updates = '{{ Updates }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
RETURNING
change_token;
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

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RegexPatternSet. You can't delete a RegexPatternSet if it's still used in any RegexMatchSet or if the RegexPatternSet is not empty.

```sql
DELETE FROM aws.waf_regional.regex_pattern_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
