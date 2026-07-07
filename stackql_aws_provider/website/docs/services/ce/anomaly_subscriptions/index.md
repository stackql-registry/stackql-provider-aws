--- 
title: anomaly_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_subscriptions
  - ce
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

Creates, updates, deletes, gets or lists an <code>anomaly_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomaly_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.anomaly_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_anomaly_subscriptions"
    values={[
        { label: 'get_anomaly_subscriptions', value: 'get_anomaly_subscriptions' }
    ]}
>
<TabItem value="get_anomaly_subscriptions">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>Your unique account identifier. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency that anomaly notifications are sent. Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see Creating an Amazon SNS topic for anomaly notifications. (DAILY, IMMEDIATE, WEEKLY)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorArnList" /></td>
    <td><code>array</code></td>
    <td>A list of cost anomaly monitors.</td>
</tr>
<tr>
    <td><CopyableCode code="Subscribers" /></td>
    <td><code>array</code></td>
    <td>A list of subscribers to notify.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The AnomalySubscription Amazon Resource Name (ARN). (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name for the subscription. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>(deprecated) An absolute dollar value that must be exceeded by the anomaly's total impact (see Impact for more details) for an anomaly notification to be generated. This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression. One of Threshold or ThresholdExpression is required for this resource. You cannot specify both.</td>
</tr>
<tr>
    <td><CopyableCode code="ThresholdExpression" /></td>
    <td><code>object</code></td>
    <td>Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns: Simple dimension values. There are three types of simple dimension values: CostCategories, Tags, and Dimensions. Specify the CostCategories field to define a filter that acts on Cost Categories. Specify the Tags field to define a filter that acts on Cost Allocation Tags. Specify the Dimensions field to define a filter that acts on the DimensionValues . For each filter type, you can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The corresponding Expression for this example is as follows: &#123; "Dimensions": &#123; "Key": "REGION", "Values": &#91; "us-east-1", "us-west-1" &#93; &#125; &#125; As shown in the previous example, lists of dimension values are combined with OR when applying the filter. You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported. For example, you can filter for linked account names that start with "a". The corresponding Expression for this example is as follows: &#123; "Dimensions": &#123; "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": &#91; "STARTS_WITH" &#93;, "Values": &#91; "a" &#93; &#125; &#125; Compound Expression types with logical operations. You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options. For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The corresponding Expression for this example is as follows: &#123; "And": &#91; &#123;"Or": &#91; &#123;"Dimensions": &#123; "Key": "REGION", "Values": &#91; "us-east-1", "us-west-1" &#93; &#125;&#125;, &#123;"Tags": &#123; "Key": "TagName", "Values": &#91;"Value1"&#93; &#125; &#125; &#93;&#125;, &#123;"Not": &#123;"Dimensions": &#123; "Key": "USAGE_TYPE", "Values": &#91;"DataTransfer"&#93; &#125;&#125;&#125; &#93; &#125; Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error: &#123; "And": &#91; ... &#93;, "Dimensions": &#123; "Key": "USAGE_TYPE", "Values": &#91; "DataTransfer" &#93; &#125; &#125; The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories" For the GetRightsizingRecommendation action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to LINKED_ACCOUNT.</td>
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
    <td><a href="#get_anomaly_subscriptions"><CopyableCode code="get_anomaly_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><a href="#create_anomaly_subscription"><CopyableCode code="create_anomaly_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnomalySubscription"><code>AnomalySubscription</code></a></td>
    <td></td>
    <td>Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications.</td>
</tr>
<tr>
    <td><a href="#update_anomaly_subscription"><CopyableCode code="update_anomaly_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubscriptionArn"><code>SubscriptionArn</code></a></td>
    <td></td>
    <td>Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged. The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to AnomalySubscription.</td>
</tr>
<tr>
    <td><a href="#delete_anomaly_subscription"><CopyableCode code="delete_anomaly_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cost anomaly subscription.</td>
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
    defaultValue="get_anomaly_subscriptions"
    values={[
        { label: 'get_anomaly_subscriptions', value: 'get_anomaly_subscriptions' }
    ]}
>
<TabItem value="get_anomaly_subscriptions">

Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).

```sql
SELECT
AccountId,
Frequency,
MonitorArnList,
Subscribers,
SubscriptionArn,
SubscriptionName,
Threshold,
ThresholdExpression
FROM aws.ce.anomaly_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_anomaly_subscription"
    values={[
        { label: 'create_anomaly_subscription', value: 'create_anomaly_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_anomaly_subscription">

Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications.

```sql
INSERT INTO aws.ce.anomaly_subscriptions (
AnomalySubscription,
ResourceTags,
region
)
SELECT 
'{{ AnomalySubscription }}' /* required */,
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
SubscriptionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: anomaly_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the anomaly_subscriptions resource.
    - name: AnomalySubscription
      description: |
        The cost anomaly subscription object that you want to create.
      value:
        SubscriptionArn: "{{ SubscriptionArn }}"
        AccountId: "{{ AccountId }}"
        MonitorArnList:
          - "{{ MonitorArnList }}"
        Subscribers:
          - Address: "{{ Address }}"
            Type: "{{ Type }}"
            Status: "{{ Status }}"
        Threshold: {{ Threshold }}
        Frequency: "{{ Frequency }}"
        SubscriptionName: "{{ SubscriptionName }}"
        ThresholdExpression:
          Or:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          And:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          Not:
            Or:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            And:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
          Dimensions:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          Tags:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          CostCategories:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
    - name: ResourceTags
      description: |
        An optional list of tags to associate with the specified AnomalySubscription . You can use resource tags to control access to your subscription using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don’t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_anomaly_subscription"
    values={[
        { label: 'update_anomaly_subscription', value: 'update_anomaly_subscription' }
    ]}
>
<TabItem value="update_anomaly_subscription">

Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged. The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to AnomalySubscription.

```sql
UPDATE aws.ce.anomaly_subscriptions
SET 
SubscriptionArn = '{{ SubscriptionArn }}',
Threshold = {{ Threshold }},
Frequency = '{{ Frequency }}',
MonitorArnList = '{{ MonitorArnList }}',
Subscribers = '{{ Subscribers }}',
SubscriptionName = '{{ SubscriptionName }}',
ThresholdExpression = '{{ ThresholdExpression }}'
WHERE 
region = '{{ region }}' --required
AND SubscriptionArn = '{{ SubscriptionArn }}' --required
RETURNING
SubscriptionArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_anomaly_subscription"
    values={[
        { label: 'delete_anomaly_subscription', value: 'delete_anomaly_subscription' }
    ]}
>
<TabItem value="delete_anomaly_subscription">

Deletes a cost anomaly subscription.

```sql
DELETE FROM aws.ce.anomaly_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
