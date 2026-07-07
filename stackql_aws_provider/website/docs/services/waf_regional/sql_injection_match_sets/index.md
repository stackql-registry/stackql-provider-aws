--- 
title: sql_injection_match_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - sql_injection_match_sets
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

Creates, updates, deletes, gets or lists a <code>sql_injection_match_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sql_injection_match_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.sql_injection_match_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sql_injection_match_set"
    values={[
        { label: 'get_sql_injection_match_set', value: 'get_sql_injection_match_set' },
        { label: 'list_sql_injection_match_sets', value: 'list_sql_injection_match_sets' }
    ]}
>
<TabItem value="get_sql_injection_match_set">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name, if any, of the SqlInjectionMatchSet. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SqlInjectionMatchSetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a SqlInjectionMatchSet. You use SqlInjectionMatchSetId to get information about a SqlInjectionMatchSet (see GetSqlInjectionMatchSet), update a SqlInjectionMatchSet (see UpdateSqlInjectionMatchSet), insert a SqlInjectionMatchSet into a Rule or delete one from a Rule (see UpdateRule), and delete a SqlInjectionMatchSet from AWS WAF (see DeleteSqlInjectionMatchSet). SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SqlInjectionMatchTuples" /></td>
    <td><code>array</code></td>
    <td>Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sql_injection_match_sets">

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
    <td>If you have more SqlInjectionMatchSet objects than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more SqlInjectionMatchSet objects, submit another ListSqlInjectionMatchSets request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SqlInjectionMatchSets" /></td>
    <td><code>array</code></td>
    <td>An array of SqlInjectionMatchSetSummary objects.</td>
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
    <td><a href="#get_sql_injection_match_set"><CopyableCode code="get_sql_injection_match_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.</td>
</tr>
<tr>
    <td><a href="#list_sql_injection_match_sets"><CopyableCode code="list_sql_injection_match_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of SqlInjectionMatchSet objects.</td>
</tr>
<tr>
    <td><a href="#create_sql_injection_match_set"><CopyableCode code="create_sql_injection_match_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings. To create and configure a SqlInjectionMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateSqlInjectionMatchSet request. Submit a CreateSqlInjectionMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateSqlInjectionMatchSet request. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_sql_injection_match_set"><CopyableCode code="update_sql_injection_match_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SqlInjectionMatchSetId"><code>SqlInjectionMatchSetId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet. For each SqlInjectionMatchTuple object, you specify the following values: Action: Whether to insert the object into or delete the object from the array. To change a SqlInjectionMatchTuple, you delete the existing object and add a new one. FieldToMatch: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter. TextTransformation: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code. You can only specify a single type of TextTransformation. You use SqlInjectionMatchSet objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a SqlInjectionMatchSet with the applicable settings, and then configure AWS WAF to block the requests. To create and configure a SqlInjectionMatchSet, perform the following steps: Submit a CreateSqlInjectionMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_sql_injection_match_set"><CopyableCode code="delete_sql_injection_match_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a SqlInjectionMatchSet. You can't delete a SqlInjectionMatchSet if it's still used in any Rules or if it still contains any SqlInjectionMatchTuple objects. If you just want to remove a SqlInjectionMatchSet from a Rule, use UpdateRule. To permanently delete a SqlInjectionMatchSet from AWS WAF, perform the following steps: Update the SqlInjectionMatchSet to remove filters, if any. For more information, see UpdateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteSqlInjectionMatchSet request. Submit a DeleteSqlInjectionMatchSet request.</td>
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
    defaultValue="get_sql_injection_match_set"
    values={[
        { label: 'get_sql_injection_match_set', value: 'get_sql_injection_match_set' },
        { label: 'list_sql_injection_match_sets', value: 'list_sql_injection_match_sets' }
    ]}
>
<TabItem value="get_sql_injection_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.

```sql
SELECT
Name,
SqlInjectionMatchSetId,
SqlInjectionMatchTuples
FROM aws.waf_regional.sql_injection_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sql_injection_match_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of SqlInjectionMatchSet objects.

```sql
SELECT
NextMarker,
SqlInjectionMatchSets
FROM aws.waf_regional.sql_injection_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sql_injection_match_set"
    values={[
        { label: 'create_sql_injection_match_set', value: 'create_sql_injection_match_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sql_injection_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings. To create and configure a SqlInjectionMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateSqlInjectionMatchSet request. Submit a CreateSqlInjectionMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateSqlInjectionMatchSet request. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.sql_injection_match_sets (
Name,
ChangeToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ region }}'
RETURNING
ChangeToken,
SqlInjectionMatchSet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sql_injection_match_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sql_injection_match_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description for the SqlInjectionMatchSet that you're creating. You can't change Name after you create the SqlInjectionMatchSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sql_injection_match_set"
    values={[
        { label: 'update_sql_injection_match_set', value: 'update_sql_injection_match_set' }
    ]}
>
<TabItem value="update_sql_injection_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet. For each SqlInjectionMatchTuple object, you specify the following values: Action: Whether to insert the object into or delete the object from the array. To change a SqlInjectionMatchTuple, you delete the existing object and add a new one. FieldToMatch: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter. TextTransformation: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code. You can only specify a single type of TextTransformation. You use SqlInjectionMatchSet objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a SqlInjectionMatchSet with the applicable settings, and then configure AWS WAF to block the requests. To create and configure a SqlInjectionMatchSet, perform the following steps: Submit a CreateSqlInjectionMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.sql_injection_match_sets
SET 
SqlInjectionMatchSetId = '{{ SqlInjectionMatchSetId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}'
WHERE 
region = '{{ region }}' --required
AND SqlInjectionMatchSetId = '{{ SqlInjectionMatchSetId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sql_injection_match_set"
    values={[
        { label: 'delete_sql_injection_match_set', value: 'delete_sql_injection_match_set' }
    ]}
>
<TabItem value="delete_sql_injection_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a SqlInjectionMatchSet. You can't delete a SqlInjectionMatchSet if it's still used in any Rules or if it still contains any SqlInjectionMatchTuple objects. If you just want to remove a SqlInjectionMatchSet from a Rule, use UpdateRule. To permanently delete a SqlInjectionMatchSet from AWS WAF, perform the following steps: Update the SqlInjectionMatchSet to remove filters, if any. For more information, see UpdateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteSqlInjectionMatchSet request. Submit a DeleteSqlInjectionMatchSet request.

```sql
DELETE FROM aws.waf_regional.sql_injection_match_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
