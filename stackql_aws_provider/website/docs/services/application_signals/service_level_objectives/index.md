--- 
title: service_level_objectives
hide_title: false
hide_table_of_contents: false
keywords:
  - service_level_objectives
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>service_level_objectives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_level_objectives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.service_level_objectives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_level_objective"
    values={[
        { label: 'get_service_level_objective', value: 'get_service_level_objective' },
        { label: 'list_service_level_objectives', value: 'list_service_level_objectives' }
    ]}
>
<TabItem value="get_service_level_objective">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of this SLO. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):application-signals:&#91;^:&#93;*:&#91;^:&#93;*:slo/&#91;0-9A-Za-z&#93;&#91;-._0-9A-Za-z &#93;&#123;0,126&#125;&#91;0-9A-Za-z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AutoInvestigationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether DevOps Agent will automatically investigate this SLO when it is breached</td>
</tr>
<tr>
    <td><CopyableCode code="BurnRateConfigurations" /></td>
    <td><code>array</code></td>
    <td>Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this SLO was created. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description that you created for this SLO.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationType" /></td>
    <td><code>string</code></td>
    <td>Displays whether this is a period-based SLO or a request-based SLO. (PeriodBased, RequestBased)</td>
</tr>
<tr>
    <td><CopyableCode code="Goal" /></td>
    <td><code>object</code></td>
    <td>This structure contains the attributes that determine the goal of an SLO. This includes the time period for evaluation and the attainment threshold.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this SLO was most recently updated. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricSourceType" /></td>
    <td><code>string</code></td>
    <td>Displays the SLI metric source type for this SLO. Supported types are: Service operation Service dependency Service CloudWatch metric AppMonitor Canary (ServiceOperation, CloudWatchMetric, ServiceDependency, AppMonitor, Canary, Service)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of this SLO. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-._0-9A-Za-z &#93;&#123;0,126&#125;&#91;0-9A-Za-z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestBasedSli" /></td>
    <td><code>object</code></td>
    <td>This structure contains information about the performance metric that a request-based SLO monitors.</td>
</tr>
<tr>
    <td><CopyableCode code="Sli" /></td>
    <td><code>object</code></td>
    <td>A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_level_objectives">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of this service level objective. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):application-signals:&#91;^:&#93;*:&#91;^:&#93;*:slo/&#91;0-9A-Za-z&#93;&#91;-._0-9A-Za-z &#93;&#123;0,126&#125;&#91;0-9A-Za-z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompositeSliConfig" /></td>
    <td><code>object</code></td>
    <td>The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this service level objective was created. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="DependencyConfig" /></td>
    <td><code>object</code></td>
    <td>Identifies the dependency using the DependencyKeyAttributes and DependencyOperationName. When creating a service dependency SLO, you must specify the KeyAttributes of the service, and the DependencyConfig for the dependency. You can specify the OperationName of the service, from which it calls the dependency. Alternatively, you can exclude OperationName and the SLO will monitor all of the service's operations that call the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationType" /></td>
    <td><code>string</code></td>
    <td>Displays whether this is a period-based SLO or a request-based SLO. (PeriodBased, RequestBased)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyAttributes" /></td>
    <td><code>object</code></td>
    <td>This is a string-to-string map. It can include the following fields. Type designates the type of object this service level objective is for. ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource. Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service. Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource. Environment specifies the location where this object is hosted, or what it belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricSource" /></td>
    <td><code>object</code></td>
    <td>Identifies the metric source for SLOs on resources other than Application Signals services.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricSourceType" /></td>
    <td><code>string</code></td>
    <td>Displays the SLI metric source type for this SLO. Supported types are: Service operation Service dependency Service CloudWatch metric AppMonitor Canary (ServiceOperation, CloudWatchMetric, ServiceDependency, AppMonitor, Canary, Service)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the service level objective. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-._0-9A-Za-z &#93;&#123;0,126&#125;&#91;0-9A-Za-z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperationName" /></td>
    <td><code>string</code></td>
    <td>If this service level objective is specific to a single operation, this field displays the name of that operation.</td>
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
    <td><a href="#get_service_level_objective"><CopyableCode code="get_service_level_objective" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one SLO created in the account.</td>
</tr>
<tr>
    <td><a href="#list_service_level_objectives"><CopyableCode code="list_service_level_objectives" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OperationName"><code>OperationName</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludeLinkedAccounts"><code>IncludeLinkedAccounts</code></a>, <a href="#parameter-SloOwnerAwsAccountId"><code>SloOwnerAwsAccountId</code></a></td>
    <td>Returns a list of SLOs created in this account.</td>
</tr>
<tr>
    <td><a href="#create_service_level_objective"><CopyableCode code="create_service_level_objective" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want. Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached. The target performance quality that is defined for an SLO is the attainment goal. You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series. You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard metrics to Application Signals. When you create an SLO, you specify whether it is a period-based SLO or a request-based SLO. Each type of SLO has a different way of evaluating your application's performance against its attainment goal. A period-based SLO uses defined periods of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the number of good periods/number of total periods. For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods. A request-based SLO doesn't use pre-defined periods of time. Instead, the SLO measures number of good requests/number of total requests during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO. After you have created an SLO, you can retrieve error budget reports for it. An error budget is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal. For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The remaining error budget decreases with every failed period that is recorded. The error budget within one interval can never increase. For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month. For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests. For more information about SLOs, see Service level objectives (SLOs). When you perform a CreateServiceLevelObjective operation, Application Signals creates the AWSServiceRoleForCloudWatchApplicationSignals service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions: xray:GetServiceGraph logs:StartQuery logs:GetQueryResults cloudwatch:GetMetricData cloudwatch:ListMetrics tag:GetResources autoscaling:DescribeAutoScalingGroups</td>
</tr>
<tr>
    <td><a href="#update_service_level_objective"><CopyableCode code="update_service_level_objective" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained. You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.</td>
</tr>
<tr>
    <td><a href="#delete_service_level_objective"><CopyableCode code="delete_service_level_objective" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified service level objective.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ARN or name of the service level objective to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-IncludeLinkedAccounts">
    <td><CopyableCode code="IncludeLinkedAccounts" /></td>
    <td><code>boolean</code></td>
    <td>If you are using this operation in a monitoring account, specify true to include SLO from source accounts in the returned data. When you are monitoring an account, you can use Amazon Web Services account ID in KeyAttribute filter for service source account and SloOwnerawsaccountID for SLO source account with IncludeLinkedAccounts to filter the returned data to only a single source account.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of service level objectives.</td>
</tr>
<tr id="parameter-OperationName">
    <td><CopyableCode code="OperationName" /></td>
    <td><code>string</code></td>
    <td>The name of the operation that this SLO is associated with.</td>
</tr>
<tr id="parameter-SloOwnerAwsAccountId">
    <td><CopyableCode code="SloOwnerAwsAccountId" /></td>
    <td><code>string</code></td>
    <td>SLO's Amazon Web Services account ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_level_objective"
    values={[
        { label: 'get_service_level_objective', value: 'get_service_level_objective' },
        { label: 'list_service_level_objectives', value: 'list_service_level_objectives' }
    ]}
>
<TabItem value="get_service_level_objective">

Returns information about one SLO created in the account.

```sql
SELECT
Arn,
AutoInvestigationEnabled,
BurnRateConfigurations,
CreatedTime,
Description,
EvaluationType,
Goal,
LastUpdatedTime,
MetricSourceType,
Name,
RequestBasedSli,
Sli
FROM aws.application_signals.service_level_objectives
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_level_objectives">

Returns a list of SLOs created in this account.

```sql
SELECT
Arn,
CompositeSliConfig,
CreatedTime,
DependencyConfig,
EvaluationType,
KeyAttributes,
MetricSource,
MetricSourceType,
Name,
OperationName
FROM aws.application_signals.service_level_objectives
WHERE region = '{{ region }}' -- required
AND OperationName = '{{ OperationName }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IncludeLinkedAccounts = '{{ IncludeLinkedAccounts }}'
AND SloOwnerAwsAccountId = '{{ SloOwnerAwsAccountId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_level_objective"
    values={[
        { label: 'create_service_level_objective', value: 'create_service_level_objective' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_level_objective">

Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want. Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached. The target performance quality that is defined for an SLO is the attainment goal. You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series. You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard metrics to Application Signals. When you create an SLO, you specify whether it is a period-based SLO or a request-based SLO. Each type of SLO has a different way of evaluating your application's performance against its attainment goal. A period-based SLO uses defined periods of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the number of good periods/number of total periods. For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods. A request-based SLO doesn't use pre-defined periods of time. Instead, the SLO measures number of good requests/number of total requests during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO. After you have created an SLO, you can retrieve error budget reports for it. An error budget is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal. For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The remaining error budget decreases with every failed period that is recorded. The error budget within one interval can never increase. For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month. For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests. For more information about SLOs, see Service level objectives (SLOs). When you perform a CreateServiceLevelObjective operation, Application Signals creates the AWSServiceRoleForCloudWatchApplicationSignals service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions: xray:GetServiceGraph logs:StartQuery logs:GetQueryResults cloudwatch:GetMetricData cloudwatch:ListMetrics tag:GetResources autoscaling:DescribeAutoScalingGroups

```sql
INSERT INTO aws.application_signals.service_level_objectives (
Name,
Description,
SliConfig,
RequestBasedSliConfig,
Goal,
Tags,
BurnRateConfigurations,
CreateRecommendedSlo,
AutoInvestigationEnabled,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ SliConfig }}',
'{{ RequestBasedSliConfig }}',
'{{ Goal }}',
'{{ Tags }}',
'{{ BurnRateConfigurations }}',
{{ CreateRecommendedSlo }},
{{ AutoInvestigationEnabled }},
'{{ region }}'
RETURNING
Slo
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_level_objectives
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_level_objectives resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: SliConfig
      description: |
        This structure specifies the information about the service and the performance metric that a period-based SLO is to monitor.
      value:
        SliMetricConfig:
          KeyAttributes: "{{ KeyAttributes }}"
          OperationName: "{{ OperationName }}"
          MetricType: "{{ MetricType }}"
          MetricName: "{{ MetricName }}"
          Statistic: "{{ Statistic }}"
          PeriodSeconds: {{ PeriodSeconds }}
          MetricSource:
            MetricSourceKeyAttributes: "{{ MetricSourceKeyAttributes }}"
            MetricSourceAttributes: "{{ MetricSourceAttributes }}"
          MetricDataQueries:
            - Id: "{{ Id }}"
              MetricStat:
                Metric:
                  Namespace: "{{ Namespace }}"
                  MetricName: "{{ MetricName }}"
                  Dimensions: "{{ Dimensions }}"
                Period: {{ Period }}
                Stat: "{{ Stat }}"
                Unit: "{{ Unit }}"
              Expression: "{{ Expression }}"
              Label: "{{ Label }}"
              ReturnData: {{ ReturnData }}
              Period: {{ Period }}
              AccountId: "{{ AccountId }}"
          DependencyConfig:
            DependencyKeyAttributes: "{{ DependencyKeyAttributes }}"
            DependencyOperationName: "{{ DependencyOperationName }}"
          CompositeSliConfig:
            SelectionConfig:
              Type: "{{ Type }}"
              Pattern: "{{ Pattern }}"
            Components:
              - OperationName: "{{ OperationName }}"
        MetricThreshold: {{ MetricThreshold }}
        ComparisonOperator: "{{ ComparisonOperator }}"
    - name: RequestBasedSliConfig
      description: |
        This structure specifies the information about the service and the performance metric that a request-based SLO is to monitor.
      value:
        RequestBasedSliMetricConfig:
          KeyAttributes: "{{ KeyAttributes }}"
          OperationName: "{{ OperationName }}"
          MetricType: "{{ MetricType }}"
          TotalRequestCountMetric:
            - Id: "{{ Id }}"
              MetricStat:
                Metric:
                  Namespace: "{{ Namespace }}"
                  MetricName: "{{ MetricName }}"
                  Dimensions: "{{ Dimensions }}"
                Period: {{ Period }}
                Stat: "{{ Stat }}"
                Unit: "{{ Unit }}"
              Expression: "{{ Expression }}"
              Label: "{{ Label }}"
              ReturnData: {{ ReturnData }}
              Period: {{ Period }}
              AccountId: "{{ AccountId }}"
          MonitoredRequestCountMetric:
            GoodCountMetric:
              - Id: "{{ Id }}"
                MetricStat:
                  Metric: "{{ Metric }}"
                  Period: {{ Period }}
                  Stat: "{{ Stat }}"
                  Unit: "{{ Unit }}"
                Expression: "{{ Expression }}"
                Label: "{{ Label }}"
                ReturnData: {{ ReturnData }}
                Period: {{ Period }}
                AccountId: "{{ AccountId }}"
            BadCountMetric:
              - Id: "{{ Id }}"
                MetricStat:
                  Metric: "{{ Metric }}"
                  Period: {{ Period }}
                  Stat: "{{ Stat }}"
                  Unit: "{{ Unit }}"
                Expression: "{{ Expression }}"
                Label: "{{ Label }}"
                ReturnData: {{ ReturnData }}
                Period: {{ Period }}
                AccountId: "{{ AccountId }}"
          DependencyConfig:
            DependencyKeyAttributes: "{{ DependencyKeyAttributes }}"
            DependencyOperationName: "{{ DependencyOperationName }}"
          MetricSource:
            MetricSourceKeyAttributes: "{{ MetricSourceKeyAttributes }}"
            MetricSourceAttributes: "{{ MetricSourceAttributes }}"
          MetricName: "{{ MetricName }}"
          CompositeSliConfig:
            SelectionConfig:
              Type: "{{ Type }}"
              Pattern: "{{ Pattern }}"
            Components:
              - OperationName: "{{ OperationName }}"
        MetricThreshold: {{ MetricThreshold }}
        ComparisonOperator: "{{ ComparisonOperator }}"
    - name: Goal
      description: |
        This structure contains the attributes that determine the goal of an SLO. This includes the time period for evaluation and the attainment threshold.
      value:
        Interval:
          RollingInterval:
            DurationUnit: "{{ DurationUnit }}"
            Duration: {{ Duration }}
          CalendarInterval:
            StartTime: "{{ StartTime }}"
            DurationUnit: "{{ DurationUnit }}"
            Duration: {{ Duration }}
        AttainmentGoal: {{ AttainmentGoal }}
        WarningThreshold: {{ WarningThreshold }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: BurnRateConfigurations
      value:
        - LookBackWindowMinutes: {{ LookBackWindowMinutes }}
    - name: CreateRecommendedSlo
      value: {{ CreateRecommendedSlo }}
    - name: AutoInvestigationEnabled
      value: {{ AutoInvestigationEnabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_level_objective"
    values={[
        { label: 'update_service_level_objective', value: 'update_service_level_objective' }
    ]}
>
<TabItem value="update_service_level_objective">

Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained. You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.

```sql
UPDATE aws.application_signals.service_level_objectives
SET 
Description = '{{ Description }}',
SliConfig = '{{ SliConfig }}',
RequestBasedSliConfig = '{{ RequestBasedSliConfig }}',
Goal = '{{ Goal }}',
BurnRateConfigurations = '{{ BurnRateConfigurations }}',
AutoInvestigationEnabled = {{ AutoInvestigationEnabled }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
Slo;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_level_objective"
    values={[
        { label: 'delete_service_level_objective', value: 'delete_service_level_objective' }
    ]}
>
<TabItem value="delete_service_level_objective">

Deletes the specified service level objective.

```sql
DELETE FROM aws.application_signals.service_level_objectives
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
