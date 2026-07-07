--- 
title: rate_based_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rate_based_rules
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

Creates, updates, deletes, gets or lists a <code>rate_based_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rate_based_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.rate_based_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rate_based_rule"
    values={[
        { label: 'get_rate_based_rule', value: 'get_rate_based_rule' },
        { label: 'list_rate_based_rules', value: 'list_rate_based_rules' }
    ]}
>
<TabItem value="get_rate_based_rule">

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
    <td><CopyableCode code="MatchPredicates" /></td>
    <td><code>array</code></td>
    <td>The Predicates object contains one Predicate element for each ByteMatchSet, IPSet, or SqlInjectionMatchSet object that you want to include in a RateBasedRule.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description for the metrics for a RateBasedRule. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the RateBasedRule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description for a RateBasedRule. You can't change the name of a RateBasedRule after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RateKey" /></td>
    <td><code>string</code></td>
    <td>The field that AWS WAF uses to determine if requests are likely arriving from single source and thus subject to rate monitoring. The only valid value for RateKey is IP. IP indicates that requests arriving from the same IP address are subject to the RateLimit that is specified in the RateBasedRule. (IP)</td>
</tr>
<tr>
    <td><CopyableCode code="RateLimit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of requests, which have an identical value in the field specified by the RateKey, allowed in a five-minute period. If the number of requests exceeds the RateLimit and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a RateBasedRule. You use RuleId to get more information about a RateBasedRule (see GetRateBasedRule), update a RateBasedRule (see UpdateRateBasedRule), insert a RateBasedRule into a WebACL or delete one from a WebACL (see UpdateWebACL), or delete a RateBasedRule from AWS WAF (see DeleteRateBasedRule). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rate_based_rules">

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
    <td>If you have more Rules than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more Rules, submit another ListRateBasedRules request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_rate_based_rule"><CopyableCode code="get_rate_based_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.</td>
</tr>
<tr>
    <td><a href="#list_rate_based_rules"><CopyableCode code="list_rate_based_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleSummary objects.</td>
</tr>
<tr>
    <td><a href="#create_rate_based_rule"><CopyableCode code="create_rate_based_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-RateKey"><code>RateKey</code></a>, <a href="#parameter-RateLimit"><code>RateLimit</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RateBasedRule. The RateBasedRule contains a RateLimit, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The RateBasedRule also contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to count or block if these requests exceed the RateLimit. If you add more than one predicate to a RateBasedRule, a request not only must exceed the RateLimit, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a RateBasedRule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header Further, you specify a RateLimit of 1,000. You then add the RateBasedRule to a WebACL and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests. As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a RateBasedRule: A ByteMatchSet with FieldToMatch of URI A PositionalConstraint of STARTS_WITH A TargetString of login Further, you specify a RateLimit of 1,000. By adding this RateBasedRule to a WebACL, you could limit requests to your login page without affecting the rest of your site. To create and configure a RateBasedRule, perform the following steps: Create and update the predicates that you want to include in the rule. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRule request. Submit a CreateRateBasedRule request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRateBasedRule request to specify the predicates that you want to include in the rule. Create and update a WebACL that contains the RateBasedRule. For more information, see CreateWebACL. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_rate_based_rule"><CopyableCode code="update_rate_based_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleId"><code>RuleId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a>, <a href="#parameter-RateLimit"><code>RateLimit</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule. Each Predicate object identifies a predicate, such as a ByteMatchSet or an IPSet, that specifies the web requests that you want to block or count. The RateLimit specifies the number of requests every five minutes that triggers the rule. If you add more than one predicate to a RateBasedRule, a request must match all the predicates and exceed the RateLimit to be counted or blocked. For example, suppose you add the following to a RateBasedRule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header Further, you specify a RateLimit of 1,000. You then add the RateBasedRule to a WebACL and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests. As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a RateBasedRule: A ByteMatchSet with FieldToMatch of URI A PositionalConstraint of STARTS_WITH A TargetString of login Further, you specify a RateLimit of 1,000. By adding this RateBasedRule to a WebACL, you could limit requests to your login page without affecting the rest of your site.</td>
</tr>
<tr>
    <td><a href="#delete_rate_based_rule"><CopyableCode code="delete_rate_based_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RateBasedRule. You can't delete a rule if it's still used in any WebACL objects or if it still includes any predicates, such as ByteMatchSet objects. If you just want to remove a rule from a WebACL, use UpdateWebACL. To permanently delete a RateBasedRule from AWS WAF, perform the following steps: Update the RateBasedRule to remove predicates, if any. For more information, see UpdateRateBasedRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRateBasedRule request. Submit a DeleteRateBasedRule request.</td>
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
    defaultValue="get_rate_based_rule"
    values={[
        { label: 'get_rate_based_rule', value: 'get_rate_based_rule' },
        { label: 'list_rate_based_rules', value: 'list_rate_based_rules' }
    ]}
>
<TabItem value="get_rate_based_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.

```sql
SELECT
MatchPredicates,
MetricName,
Name,
RateKey,
RateLimit,
RuleId
FROM aws.waf_regional.rate_based_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rate_based_rules">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of RuleSummary objects.

```sql
SELECT
NextMarker,
Rules
FROM aws.waf_regional.rate_based_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rate_based_rule"
    values={[
        { label: 'create_rate_based_rule', value: 'create_rate_based_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rate_based_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a RateBasedRule. The RateBasedRule contains a RateLimit, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The RateBasedRule also contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to count or block if these requests exceed the RateLimit. If you add more than one predicate to a RateBasedRule, a request not only must exceed the RateLimit, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a RateBasedRule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header Further, you specify a RateLimit of 1,000. You then add the RateBasedRule to a WebACL and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests. As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a RateBasedRule: A ByteMatchSet with FieldToMatch of URI A PositionalConstraint of STARTS_WITH A TargetString of login Further, you specify a RateLimit of 1,000. By adding this RateBasedRule to a WebACL, you could limit requests to your login page without affecting the rest of your site. To create and configure a RateBasedRule, perform the following steps: Create and update the predicates that you want to include in the rule. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateRule request. Submit a CreateRateBasedRule request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateRule request. Submit an UpdateRateBasedRule request to specify the predicates that you want to include in the rule. Create and update a WebACL that contains the RateBasedRule. For more information, see CreateWebACL. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.rate_based_rules (
Name,
MetricName,
RateKey,
RateLimit,
ChangeToken,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ MetricName }}' /* required */,
'{{ RateKey }}' /* required */,
{{ RateLimit }} /* required */,
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
- name: rate_based_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rate_based_rules resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the RateBasedRule. You can't change the name of a RateBasedRule after you create it.
    - name: MetricName
      value: "{{ MetricName }}"
      description: |
        A friendly name or description for the metrics for this RateBasedRule. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the RateBasedRule.
    - name: RateKey
      value: "{{ RateKey }}"
      description: |
        The field that AWS WAF uses to determine if requests are likely arriving from a single source and thus subject to rate monitoring. The only valid value for RateKey is IP. IP indicates that requests that arrive from the same IP address are subject to the RateLimit that is specified in the RateBasedRule.
      valid_values: ['IP']
    - name: RateLimit
      value: {{ RateLimit }}
      description: |
        The maximum number of requests, which have an identical value in the field that is specified by RateKey, allowed in a five-minute period. If the number of requests exceeds the RateLimit and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The ChangeToken that you used to submit the CreateRateBasedRule request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rate_based_rule"
    values={[
        { label: 'update_rate_based_rule', value: 'update_rate_based_rule' }
    ]}
>
<TabItem value="update_rate_based_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule. Each Predicate object identifies a predicate, such as a ByteMatchSet or an IPSet, that specifies the web requests that you want to block or count. The RateLimit specifies the number of requests every five minutes that triggers the rule. If you add more than one predicate to a RateBasedRule, a request must match all the predicates and exceed the RateLimit to be counted or blocked. For example, suppose you add the following to a RateBasedRule: An IPSet that matches the IP address 192.0.2.44/32 A ByteMatchSet that matches BadBot in the User-Agent header Further, you specify a RateLimit of 1,000. You then add the RateBasedRule to a WebACL and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 and the User-Agent header in the request must contain the value BadBot. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests. As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a RateBasedRule: A ByteMatchSet with FieldToMatch of URI A PositionalConstraint of STARTS_WITH A TargetString of login Further, you specify a RateLimit of 1,000. By adding this RateBasedRule to a WebACL, you could limit requests to your login page without affecting the rest of your site.

```sql
UPDATE aws.waf_regional.rate_based_rules
SET 
RuleId = '{{ RuleId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}',
RateLimit = {{ RateLimit }}
WHERE 
region = '{{ region }}' --required
AND RuleId = '{{ RuleId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
AND RateLimit = '{{ RateLimit }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rate_based_rule"
    values={[
        { label: 'delete_rate_based_rule', value: 'delete_rate_based_rule' }
    ]}
>
<TabItem value="delete_rate_based_rule">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a RateBasedRule. You can't delete a rule if it's still used in any WebACL objects or if it still includes any predicates, such as ByteMatchSet objects. If you just want to remove a rule from a WebACL, use UpdateWebACL. To permanently delete a RateBasedRule from AWS WAF, perform the following steps: Update the RateBasedRule to remove predicates, if any. For more information, see UpdateRateBasedRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteRateBasedRule request. Submit a DeleteRateBasedRule request.

```sql
DELETE FROM aws.waf_regional.rate_based_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
