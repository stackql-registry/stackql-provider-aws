--- 
title: configuration_aggregators
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_aggregators
  - config
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

Creates, updates, deletes, gets or lists a <code>configuration_aggregators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_aggregators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.configuration_aggregators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_aggregators"
    values={[
        { label: 'describe_configuration_aggregators', value: 'describe_configuration_aggregators' }
    ]}
>
<TabItem value="describe_configuration_aggregators">

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
    <td><CopyableCode code="account_aggregation_sources" /></td>
    <td><code>array</code></td>
    <td>Provides a list of source accounts and regions to be aggregated.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregator_filters" /></td>
    <td><code>object</code></td>
    <td>An object to filter the data you specify for an aggregator.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_aggregator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the aggregator. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:config:&#91;a-z\-\d&#93;+:\d+:config-aggregator/config-aggregator-&#91;a-z\d&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_aggregator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the aggregator. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services service that created the configuration aggregator.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp when the configuration aggregator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_aggregation_source" /></td>
    <td><code>object</code></td>
    <td>Provides an organization and list of regions to be aggregated.</td>
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
    <td><a href="#describe_configuration_aggregators"><CopyableCode code="describe_configuration_aggregators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this operation returns the details for all the configuration aggregators associated with the account.</td>
</tr>
<tr>
    <td><a href="#put_configuration_aggregator"><CopyableCode code="put_configuration_aggregator" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationAggregatorName"><code>ConfigurationAggregatorName</code></a></td>
    <td></td>
    <td>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization. accountIds that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call DescribeConfigurationAggregators to get the previous accounts and then append new ones. Config should be enabled in source accounts and regions you want to aggregate. If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls EnableAwsServiceAccess API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls ListDelegatedAdministrators API to verify whether the caller is a valid delegated administrator. To register a delegated administrator, see Register a Delegated Administrator in the Config developer guide. Tags are added at creation and cannot be updated with this operation PutConfigurationAggregator is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_aggregator"><CopyableCode code="delete_configuration_aggregator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.</td>
</tr>
<tr>
    <td><a href="#select_aggregate_resource_config"><CopyableCode code="select_aggregate_resource_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Expression"><code>Expression</code></a>, <a href="#parameter-ConfigurationAggregatorName"><code>ConfigurationAggregatorName</code></a></td>
    <td></td>
    <td>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties. For more information about query components, see the Query Components section in the Config Developer Guide. If you run an aggregation query (i.e., using GROUP BY or using aggregate functions such as COUNT; e.g., SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId) and do not specify the MaxResults or the Limit query parameters, the default page size is set to 500. If you run a non-aggregation query (i.e., not using GROUP BY or aggregate function; e.g., SELECT * WHERE resourceType = 'AWS::IAM::Role') and do not specify the MaxResults or the Limit query parameters, the default page size is set to 25.</td>
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
    defaultValue="describe_configuration_aggregators"
    values={[
        { label: 'describe_configuration_aggregators', value: 'describe_configuration_aggregators' }
    ]}
>
<TabItem value="describe_configuration_aggregators">

Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this operation returns the details for all the configuration aggregators associated with the account.

```sql
SELECT
account_aggregation_sources,
aggregator_filters,
configuration_aggregator_arn,
configuration_aggregator_name,
created_by,
creation_time,
last_updated_time,
organization_aggregation_source
FROM aws.config.configuration_aggregators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configuration_aggregator"
    values={[
        { label: 'put_configuration_aggregator', value: 'put_configuration_aggregator' }
    ]}
>
<TabItem value="put_configuration_aggregator">

Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization. accountIds that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call DescribeConfigurationAggregators to get the previous accounts and then append new ones. Config should be enabled in source accounts and regions you want to aggregate. If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls EnableAwsServiceAccess API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls ListDelegatedAdministrators API to verify whether the caller is a valid delegated administrator. To register a delegated administrator, see Register a Delegated Administrator in the Config developer guide. Tags are added at creation and cannot be updated with this operation PutConfigurationAggregator is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.configuration_aggregators
SET 
ConfigurationAggregatorName = '{{ ConfigurationAggregatorName }}',
AccountAggregationSources = '{{ AccountAggregationSources }}',
OrganizationAggregationSource = '{{ OrganizationAggregationSource }}',
Tags = '{{ Tags }}',
AggregatorFilters = '{{ AggregatorFilters }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationAggregatorName = '{{ ConfigurationAggregatorName }}' --required
RETURNING
configuration_aggregator;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_aggregator"
    values={[
        { label: 'delete_configuration_aggregator', value: 'delete_configuration_aggregator' }
    ]}
>
<TabItem value="delete_configuration_aggregator">

Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.

```sql
DELETE FROM aws.config.configuration_aggregators
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="select_aggregate_resource_config"
    values={[
        { label: 'select_aggregate_resource_config', value: 'select_aggregate_resource_config' }
    ]}
>
<TabItem value="select_aggregate_resource_config">

Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties. For more information about query components, see the Query Components section in the Config Developer Guide. If you run an aggregation query (i.e., using GROUP BY or using aggregate functions such as COUNT; e.g., SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId) and do not specify the MaxResults or the Limit query parameters, the default page size is set to 500. If you run a non-aggregation query (i.e., not using GROUP BY or aggregate function; e.g., SELECT * WHERE resourceType = 'AWS::IAM::Role') and do not specify the MaxResults or the Limit query parameters, the default page size is set to 25.

```sql
EXEC aws.config.configuration_aggregators.select_aggregate_resource_config 
@region='{{ region }}' --required 
@@json=
'{
"Expression": "{{ Expression }}", 
"ConfigurationAggregatorName": "{{ ConfigurationAggregatorName }}", 
"Limit": {{ Limit }}, 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
