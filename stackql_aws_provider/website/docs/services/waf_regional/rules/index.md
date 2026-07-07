--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

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
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description for the metrics for this Rule. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change MetricName after you create the Rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name or description for the Rule. You can't change the name of a Rule after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Predicates" /></td>
    <td><code>array</code></td>
    <td>The Predicates object contains one Predicate element for each ByteMatchSet, IPSet, or SqlInjectionMatchSet object that you want to include in a Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a Rule. You use RuleId to get more information about a Rule (see GetRule), update a Rule (see UpdateRule), insert a Rule into a WebACL or delete a one from a WebACL (see UpdateWebACL), or delete a Rule from AWS WAF (see DeleteRule). RuleId is returned by CreateRule and by ListRules. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rules">

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
    <td>If you have more Rules than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more Rules, submit another ListRules request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>array</code></td>
    <td>An array of RuleSummary objects.</td>
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
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the Rule that is specified by the RuleId that you included in the GetRule request.</td>
</tr>
<tr>
    <td><a href="#list_rules"><CopyableCode code="list_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleSummary objects.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a Rule, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a Rule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header You then add the Rule to a WebACL and specify that you want to blocks requests that satisfy the Rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. To create and configure a Rule, perform the following steps: Create and update the predicates that you want to include in the Rule. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRule request. Submit a CreateRule request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRule request to specify the predicates that you want to include in the Rule. Create and update a WebACL that contains the Rule. For more information, see CreateWebACL. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_rule"><CopyableCode code="update_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleId"><code>RuleId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes Predicate objects in a Rule. Each Predicate object identifies a predicate, such as a ByteMatchSet or an IPSet, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a Rule, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a Rule: A ByteMatchSet that matches the value BadBot in the User-Agent header An IPSet that matches the IP address 192.0.2.44 You then add the Rule to a WebACL and specify that you want to block requests that satisfy the Rule. For a request to be blocked, the User-Agent header in the request must contain the value BadBot and the request must originate from the IP address 192.0.2.44. To create and configure a Rule, perform the following steps: Create and update the predicates that you want to include in the Rule. Create the Rule. See CreateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRule request to add predicates to the Rule. Create and update a WebACL that contains the Rule. See CreateWebACL. If you want to replace one ByteMatchSet or IPSet with another, you delete the existing one and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a Rule. You can't delete a Rule if it's still used in any WebACL objects or if it still includes any predicates, such as ByteMatchSet objects. If you just want to remove a Rule from a WebACL, use UpdateWebACL. To permanently delete a Rule from AWS WAF, perform the following steps: Update the Rule to remove predicates, if any. For more information, see UpdateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRule request. Submit a DeleteRule request.</td>
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
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the Rule that is specified by the RuleId that you included in the GetRule request.

```sql
SELECT
MetricName,
Name,
Predicates,
RuleId
FROM aws.waf_regional.rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rules">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleSummary objects.

```sql
SELECT
NextMarker,
Rules
FROM aws.waf_regional.rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a Rule, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a Rule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header You then add the Rule to a WebACL and specify that you want to blocks requests that satisfy the Rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. To create and configure a Rule, perform the following steps: Create and update the predicates that you want to include in the Rule. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRule request. Submit a CreateRule request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRule request to specify the predicates that you want to include in the Rule. Create and update a WebACL that contains the Rule. For more information, see CreateWebACL. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.rules (
Name,
MetricName,
ChangeToken,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ MetricName }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ChangeToken,
Rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the Rule. You can't change the name of a Rule after you create it.
    - name: MetricName
      value: "{{ MetricName }}"
      description: |
        A friendly name or description for the metrics for this Rule. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the Rule.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule"
    values={[
        { label: 'update_rule', value: 'update_rule' }
    ]}
>
<TabItem value="update_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes Predicate objects in a Rule. Each Predicate object identifies a predicate, such as a ByteMatchSet or an IPSet, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a Rule, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a Rule: A ByteMatchSet that matches the value BadBot in the User-Agent header An IPSet that matches the IP address 192.0.2.44 You then add the Rule to a WebACL and specify that you want to block requests that satisfy the Rule. For a request to be blocked, the User-Agent header in the request must contain the value BadBot and the request must originate from the IP address 192.0.2.44. To create and configure a Rule, perform the following steps: Create and update the predicates that you want to include in the Rule. Create the Rule. See CreateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRule request to add predicates to the Rule. Create and update a WebACL that contains the Rule. See CreateWebACL. If you want to replace one ByteMatchSet or IPSet with another, you delete the existing one and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.rules
SET 
RuleId = '{{ RuleId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}'
WHERE 
region = '{{ region }}' --required
AND RuleId = '{{ RuleId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a Rule. You can't delete a Rule if it's still used in any WebACL objects or if it still includes any predicates, such as ByteMatchSet objects. If you just want to remove a Rule from a WebACL, use UpdateWebACL. To permanently delete a Rule from AWS WAF, perform the following steps: Update the Rule to remove predicates, if any. For more information, see UpdateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRule request. Submit a DeleteRule request.

```sql
DELETE FROM aws.waf_regional.rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
