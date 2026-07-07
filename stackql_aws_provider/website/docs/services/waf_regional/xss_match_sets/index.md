--- 
title: xss_match_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - xss_match_sets
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

Creates, updates, deletes, gets or lists a <code>xss_match_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="xss_match_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.xss_match_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_xss_match_set"
    values={[
        { label: 'get_xss_match_set', value: 'get_xss_match_set' },
        { label: 'list_xss_match_sets', value: 'list_xss_match_sets' }
    ]}
>
<TabItem value="get_xss_match_set">

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
    <td>The name, if any, of the XssMatchSet. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="XssMatchSetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for an XssMatchSet. You use XssMatchSetId to get information about an XssMatchSet (see GetXssMatchSet), update an XssMatchSet (see UpdateXssMatchSet), insert an XssMatchSet into a Rule or delete one from a Rule (see UpdateRule), and delete an XssMatchSet from AWS WAF (see DeleteXssMatchSet). XssMatchSetId is returned by CreateXssMatchSet and by ListXssMatchSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="XssMatchTuples" /></td>
    <td><code>array</code></td>
    <td>Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_xss_match_sets">

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
    <td>If you have more XssMatchSet objects than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more XssMatchSet objects, submit another ListXssMatchSets request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="XssMatchSets" /></td>
    <td><code>array</code></td>
    <td>An array of XssMatchSetSummary objects.</td>
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
    <td><a href="#get_xss_match_set"><CopyableCode code="get_xss_match_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the XssMatchSet that is specified by XssMatchSetId.</td>
</tr>
<tr>
    <td><a href="#list_xss_match_sets"><CopyableCode code="list_xss_match_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of XssMatchSet objects.</td>
</tr>
<tr>
    <td><a href="#create_xss_match_set"><CopyableCode code="create_xss_match_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings. To create and configure an XssMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateXssMatchSet request. Submit a CreateXssMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateXssMatchSet request. Submit an UpdateXssMatchSet request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_xss_match_set"><CopyableCode code="update_xss_match_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-XssMatchSetId"><code>XssMatchSetId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet. For each XssMatchTuple object, you specify the following values: Action: Whether to insert the object into or delete the object from the array. To change an XssMatchTuple, you delete the existing object and add a new one. FieldToMatch: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter. TextTransformation: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks. You can only specify a single type of TextTransformation. You use XssMatchSet objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an XssMatchSet with the applicable settings, and then configure AWS WAF to block the requests. To create and configure an XssMatchSet, perform the following steps: Submit a CreateXssMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateXssMatchSet request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_xss_match_set"><CopyableCode code="delete_xss_match_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an XssMatchSet. You can't delete an XssMatchSet if it's still used in any Rules or if it still contains any XssMatchTuple objects. If you just want to remove an XssMatchSet from a Rule, use UpdateRule. To permanently delete an XssMatchSet from AWS WAF, perform the following steps: Update the XssMatchSet to remove filters, if any. For more information, see UpdateXssMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteXssMatchSet request. Submit a DeleteXssMatchSet request.</td>
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
    defaultValue="get_xss_match_set"
    values={[
        { label: 'get_xss_match_set', value: 'get_xss_match_set' },
        { label: 'list_xss_match_sets', value: 'list_xss_match_sets' }
    ]}
>
<TabItem value="get_xss_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the XssMatchSet that is specified by XssMatchSetId.

```sql
SELECT
Name,
XssMatchSetId,
XssMatchTuples
FROM aws.waf_regional.xss_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_xss_match_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of XssMatchSet objects.

```sql
SELECT
NextMarker,
XssMatchSets
FROM aws.waf_regional.xss_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_xss_match_set"
    values={[
        { label: 'create_xss_match_set', value: 'create_xss_match_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_xss_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings. To create and configure an XssMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateXssMatchSet request. Submit a CreateXssMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateXssMatchSet request. Submit an UpdateXssMatchSet request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.xss_match_sets (
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
XssMatchSet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: xss_match_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the xss_match_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description for the XssMatchSet that you're creating. You can't change Name after you create the XssMatchSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_xss_match_set"
    values={[
        { label: 'update_xss_match_set', value: 'update_xss_match_set' }
    ]}
>
<TabItem value="update_xss_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet. For each XssMatchTuple object, you specify the following values: Action: Whether to insert the object into or delete the object from the array. To change an XssMatchTuple, you delete the existing object and add a new one. FieldToMatch: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter. TextTransformation: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks. You can only specify a single type of TextTransformation. You use XssMatchSet objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an XssMatchSet with the applicable settings, and then configure AWS WAF to block the requests. To create and configure an XssMatchSet, perform the following steps: Submit a CreateXssMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateXssMatchSet request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.xss_match_sets
SET 
XssMatchSetId = '{{ XssMatchSetId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}'
WHERE 
region = '{{ region }}' --required
AND XssMatchSetId = '{{ XssMatchSetId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_xss_match_set"
    values={[
        { label: 'delete_xss_match_set', value: 'delete_xss_match_set' }
    ]}
>
<TabItem value="delete_xss_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an XssMatchSet. You can't delete an XssMatchSet if it's still used in any Rules or if it still contains any XssMatchTuple objects. If you just want to remove an XssMatchSet from a Rule, use UpdateRule. To permanently delete an XssMatchSet from AWS WAF, perform the following steps: Update the XssMatchSet to remove filters, if any. For more information, see UpdateXssMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteXssMatchSet request. Submit a DeleteXssMatchSet request.

```sql
DELETE FROM aws.waf_regional.xss_match_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
