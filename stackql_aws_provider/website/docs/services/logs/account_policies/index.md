--- 
title: account_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - account_policies
  - logs
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

Creates, updates, deletes, gets or lists an <code>account_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.account_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_policies"
    values={[
        { label: 'describe_account_policies', value: 'describe_account_policies' }
    ]}
>
<TabItem value="describe_account_policies">

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
    <td><CopyableCode code="account_policies" /></td>
    <td><code>array</code></td>
    <td>An array of structures that contain information about the CloudWatch Logs account policies that match the specified filters.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use when requesting the next set of items. The token expires after 24 hours.</td>
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
    <td><a href="#describe_account_policies"><CopyableCode code="describe_account_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all CloudWatch Logs account policies in the account. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are retrieving information for. To see data protection policies, you must have the logs:GetDataProtectionPolicy and logs:DescribeAccountPolicies permissions. To see subscription filter policies, you must have the logs:DescribeSubscriptionFilters and logs:DescribeAccountPolicies permissions. To see transformer policies, you must have the logs:GetTransformer and logs:DescribeAccountPolicies permissions. To see field index policies, you must have the logs:DescribeIndexPolicies and logs:DescribeAccountPolicies permissions.</td>
</tr>
<tr>
    <td><a href="#put_account_policy"><CopyableCode code="put_account_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyName"><code>policyName</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a>, <a href="#parameter-policyType"><code>policyType</code></a></td>
    <td></td>
    <td>Creates an account-level data protection policy, subscription filter policy, field index policy, transformer policy, or metric extraction policy that applies to all log groups, a subset of log groups, or a data source name and type combination in the account. For field index policies, you can configure indexed fields as facets to enable interactive exploration of your logs. Facets provide value distributions and counts for indexed fields in the CloudWatch Logs Insights console without requiring query execution. For more information, see Use facets to group and explore logs. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are creating. To create a data protection policy, you must have the logs:PutDataProtectionPolicy and logs:PutAccountPolicy permissions. To create a subscription filter policy, you must have the logs:PutSubscriptionFilter and logs:PutAccountPolicy permissions. To create a transformer policy, you must have the logs:PutTransformer and logs:PutAccountPolicy permissions. To create a field index policy, you must have the logs:PutIndexPolicy and logs:PutAccountPolicy permissions. To configure facets for field index policies, you must have the logs:PutIndexPolicy and logs:PutAccountPolicy permissions. To create a metric extraction policy, you must have the logs:PutMetricExtractionPolicy and logs:PutAccountPolicy permissions. Data protection policy A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy. Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked. If you use PutAccountPolicy to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account-level policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked. By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. To use the PutAccountPolicy operation for a data protection policy, you must be signed on with the logs:PutDataProtectionPolicy and logs:PutAccountPolicy permissions. The PutAccountPolicy operation applies to all log groups in the account. You can use PutDataProtectionPolicy to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked. Subscription filter policy A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services. Account-level subscription filter policies apply to both existing log groups and log groups that are created later in this account. Supported destinations are Kinesis Data Streams, Firehose, and Lambda. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters: An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery. An Firehose data stream in the same account as the subscription policy, for same-account delivery. A Lambda function in the same account as the subscription policy, for same-account delivery. A logical destination in a different account created with PutDestination, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations. Each account can have one account-level subscription filter policy per Region. If you are updating an existing filter, you must specify the correct name in PolicyName. To perform a PutAccountPolicy subscription filter operation for any destination except a Lambda function, you must also have the iam:PassRole permission. Transformer policy Creates or updates a log transformer policy for your account. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contain relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filters. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. For more information about the available processors to use in a transformer, see Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can have one account-level transformer policy that applies to all log groups in the account. Or you can create as many as 20 account-level transformer policies that are each scoped to a subset of log groups with the selectionCriteria parameter. If you have multiple account-level transformer policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another transformer policy filtered to my-logpprod or my-logging. You can also set up a transformer at the log-group level. For more information, see PutTransformer. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer. Field index policy You can use field index policies to create indexes on fields found in log events for a log group or data source name and type combination. Creating field indexes can help lower the scan volume for CloudWatch Logs Insights queries that reference those fields, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, user IDs, or instance IDs. For more information, see Create field indexes to improve query performance and reduce costs To find the fields that are in your log group events, use the GetLogGroupFields operation. To find the fields for a data source use the GetLogFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value or requestId in &#91;value, value, ...&#93; will attempt to process only the log events where the indexed field matches the specified value. Matches of log events to the names of indexed fields are case-sensitive. For example, an indexed field of RequestId won't match a log event containing requestId. You can have one account-level field index policy that applies to all log groups in the account. Or you can create as many as 20 account-level field index policies that are each scoped to a subset of log groups using LogGroupNamePrefix with the selectionCriteria parameter. You can have another 20 account-level field index policies using DataSourceName and DataSourceType for the selectionCriteria parameter. If you have multiple account-level index policies with LogGroupNamePrefix selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another field index policy filtered to my-logpprod or my-logging. Similarly, if you have multiple account-level index policies with DataSourceName and DataSourceType selection criteria, no two of them can use the same data source name and type combination. For example, if you have one policy filtered to the data source name amazon_vpc and data source type flow you cannot create another policy with this combination. If you create an account-level field index policy in a monitoring account in cross-account observability, the policy is applied only to the monitoring account and not to any source accounts. CloudWatch Logs provides default field indexes for all log groups in the Standard log class. Default field indexes are automatically available for the following fields: @logStream @aws.region @aws.account @source.log @data_source_name @data_source_type @data_format traceId severityText attributes.session.id CloudWatch Logs provides default field indexes for certain data source name and type combinations as well. Default field indexes are automatically available for the following data source name and type combinations as identified in the following list: amazon_vpc.flow action logStatus region flowDirection type amazon_route53.resolver_query transport rcode aws_waf.access action httpRequest.country aws_cloudtrail.data, aws_cloudtrail.management eventSource eventName awsRegion userAgent errorCode eventType managementEvent readOnly eventCategory requestId Default field indexes are in addition to any custom field indexes you define within your policy. Default field indexes are not counted towards your field index quota. If you want to create a field index policy for a single log group, you can use PutIndexPolicy instead of PutAccountPolicy. If you do so, that log group will use that log-group level policy and any account-level policies that match at the data source level; any account-level policy that matches at the log group level (for example, no selection criteria or log group name prefix selection criteria) will be ignored. Metric extraction policy A metric extraction policy controls whether CloudWatch Metrics can be created through the Embedded Metrics Format (EMF) for log groups in your account. By default, EMF metric creation is enabled for all log groups. You can use metric extraction policies to disable EMF metric creation for your entire account or specific log groups. When a policy disables EMF metric creation for a log group, log events in the EMF format are still ingested, but no CloudWatch Metrics are created from them. Creating a policy disables metrics for Amazon Web Services features that use EMF to create metrics, such as CloudWatch Container Insights and CloudWatch Application Signals. To prevent turning off those features by accident, we recommend that you exclude the underlying log-groups through a selection-criteria such as LogGroupNamePrefix NOT IN &#91;"/aws/containerinsights", "/aws/ecs/containerinsights", "/aws/application-signals/data"&#93;. Each account can have either one account-level metric extraction policy that applies to all log groups, or up to 5 policies that are each scoped to a subset of log groups with the selectionCriteria parameter. The selection criteria supports filtering by LogGroupName and LogGroupNamePrefix using the operators IN and NOT IN. You can specify up to 50 values in each IN or NOT IN list. The selection criteria can be specified in these formats: LogGroupName IN &#91;"log-group-1", "log-group-2"&#93; LogGroupNamePrefix NOT IN &#91;"/aws/prefix1", "/aws/prefix2"&#93; If you have multiple account-level metric extraction policies with selection criteria, no two of them can have overlapping criteria. For example, if you have one policy with selection criteria LogGroupNamePrefix IN &#91;"my-log"&#93;, you can't have another metric extraction policy with selection criteria LogGroupNamePrefix IN &#91;"/my-log-prod"&#93; or LogGroupNamePrefix IN &#91;"/my-logging"&#93;, as the set of log groups matching these prefixes would be a subset of the log groups matching the first policy's prefix, creating an overlap. When using NOT IN, only one policy with this operator is allowed per account. When combining policies with IN and NOT IN operators, the overlap check ensures that policies don't have conflicting effects. Two policies with IN and NOT IN operators do not overlap if and only if every value in the IN policy is completely contained within some value in the NOT IN policy. For example: If you have a NOT IN policy for prefix "/aws/lambda", you can create an IN policy for the exact log group name "/aws/lambda/function1" because the set of log groups matching "/aws/lambda/function1" is a subset of the log groups matching "/aws/lambda". If you have a NOT IN policy for prefix "/aws/lambda", you cannot create an IN policy for prefix "/aws" because the set of log groups matching "/aws" is not a subset of the log groups matching "/aws/lambda".</td>
</tr>
<tr>
    <td><a href="#delete_account_policy"><CopyableCode code="delete_account_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CloudWatch Logs account policy. This stops the account-wide policy from applying to log groups or data sources in the account. If you delete a data protection policy or subscription filter policy, any log-group level policies of those types remain in effect. This operation supports deletion of data source-based field index policies, including facet configurations, in addition to log group-based policies. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are deleting. To delete a data protection policy, you must have the logs:DeleteDataProtectionPolicy and logs:DeleteAccountPolicy permissions. To delete a subscription filter policy, you must have the logs:DeleteSubscriptionFilter and logs:DeleteAccountPolicy permissions. To delete a transformer policy, you must have the logs:DeleteTransformer and logs:DeleteAccountPolicy permissions. To delete a field index policy, you must have the logs:DeleteIndexPolicy and logs:DeleteAccountPolicy permissions. If you delete a field index policy that included facet configurations, those facets will no longer be available for interactive exploration in the CloudWatch Logs Insights console. However, facet data is retained for up to 30 days. If you delete a field index policy, the indexing of the log events that happened before you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs Insights queries.</td>
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
    defaultValue="describe_account_policies"
    values={[
        { label: 'describe_account_policies', value: 'describe_account_policies' }
    ]}
>
<TabItem value="describe_account_policies">

Returns a list of all CloudWatch Logs account policies in the account. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are retrieving information for. To see data protection policies, you must have the logs:GetDataProtectionPolicy and logs:DescribeAccountPolicies permissions. To see subscription filter policies, you must have the logs:DescribeSubscriptionFilters and logs:DescribeAccountPolicies permissions. To see transformer policies, you must have the logs:GetTransformer and logs:DescribeAccountPolicies permissions. To see field index policies, you must have the logs:DescribeIndexPolicies and logs:DescribeAccountPolicies permissions.

```sql
SELECT
account_policies,
next_token
FROM aws.logs.account_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_policy"
    values={[
        { label: 'put_account_policy', value: 'put_account_policy' }
    ]}
>
<TabItem value="put_account_policy">

Creates an account-level data protection policy, subscription filter policy, field index policy, transformer policy, or metric extraction policy that applies to all log groups, a subset of log groups, or a data source name and type combination in the account. For field index policies, you can configure indexed fields as facets to enable interactive exploration of your logs. Facets provide value distributions and counts for indexed fields in the CloudWatch Logs Insights console without requiring query execution. For more information, see Use facets to group and explore logs. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are creating. To create a data protection policy, you must have the logs:PutDataProtectionPolicy and logs:PutAccountPolicy permissions. To create a subscription filter policy, you must have the logs:PutSubscriptionFilter and logs:PutAccountPolicy permissions. To create a transformer policy, you must have the logs:PutTransformer and logs:PutAccountPolicy permissions. To create a field index policy, you must have the logs:PutIndexPolicy and logs:PutAccountPolicy permissions. To configure facets for field index policies, you must have the logs:PutIndexPolicy and logs:PutAccountPolicy permissions. To create a metric extraction policy, you must have the logs:PutMetricExtractionPolicy and logs:PutAccountPolicy permissions. Data protection policy A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy. Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked. If you use PutAccountPolicy to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account-level policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked. By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. To use the PutAccountPolicy operation for a data protection policy, you must be signed on with the logs:PutDataProtectionPolicy and logs:PutAccountPolicy permissions. The PutAccountPolicy operation applies to all log groups in the account. You can use PutDataProtectionPolicy to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked. Subscription filter policy A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services. Account-level subscription filter policies apply to both existing log groups and log groups that are created later in this account. Supported destinations are Kinesis Data Streams, Firehose, and Lambda. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters: An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery. An Firehose data stream in the same account as the subscription policy, for same-account delivery. A Lambda function in the same account as the subscription policy, for same-account delivery. A logical destination in a different account created with PutDestination, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations. Each account can have one account-level subscription filter policy per Region. If you are updating an existing filter, you must specify the correct name in PolicyName. To perform a PutAccountPolicy subscription filter operation for any destination except a Lambda function, you must also have the iam:PassRole permission. Transformer policy Creates or updates a log transformer policy for your account. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contain relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filters. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. For more information about the available processors to use in a transformer, see Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can have one account-level transformer policy that applies to all log groups in the account. Or you can create as many as 20 account-level transformer policies that are each scoped to a subset of log groups with the selectionCriteria parameter. If you have multiple account-level transformer policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another transformer policy filtered to my-logpprod or my-logging. You can also set up a transformer at the log-group level. For more information, see PutTransformer. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer. Field index policy You can use field index policies to create indexes on fields found in log events for a log group or data source name and type combination. Creating field indexes can help lower the scan volume for CloudWatch Logs Insights queries that reference those fields, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, user IDs, or instance IDs. For more information, see Create field indexes to improve query performance and reduce costs To find the fields that are in your log group events, use the GetLogGroupFields operation. To find the fields for a data source use the GetLogFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value or requestId in [value, value, ...] will attempt to process only the log events where the indexed field matches the specified value. Matches of log events to the names of indexed fields are case-sensitive. For example, an indexed field of RequestId won't match a log event containing requestId. You can have one account-level field index policy that applies to all log groups in the account. Or you can create as many as 20 account-level field index policies that are each scoped to a subset of log groups using LogGroupNamePrefix with the selectionCriteria parameter. You can have another 20 account-level field index policies using DataSourceName and DataSourceType for the selectionCriteria parameter. If you have multiple account-level index policies with LogGroupNamePrefix selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another field index policy filtered to my-logpprod or my-logging. Similarly, if you have multiple account-level index policies with DataSourceName and DataSourceType selection criteria, no two of them can use the same data source name and type combination. For example, if you have one policy filtered to the data source name amazon_vpc and data source type flow you cannot create another policy with this combination. If you create an account-level field index policy in a monitoring account in cross-account observability, the policy is applied only to the monitoring account and not to any source accounts. CloudWatch Logs provides default field indexes for all log groups in the Standard log class. Default field indexes are automatically available for the following fields: @logStream @aws.region @aws.account @source.log @data_source_name @data_source_type @data_format traceId severityText attributes.session.id CloudWatch Logs provides default field indexes for certain data source name and type combinations as well. Default field indexes are automatically available for the following data source name and type combinations as identified in the following list: amazon_vpc.flow action logStatus region flowDirection type amazon_route53.resolver_query transport rcode aws_waf.access action httpRequest.country aws_cloudtrail.data, aws_cloudtrail.management eventSource eventName awsRegion userAgent errorCode eventType managementEvent readOnly eventCategory requestId Default field indexes are in addition to any custom field indexes you define within your policy. Default field indexes are not counted towards your field index quota. If you want to create a field index policy for a single log group, you can use PutIndexPolicy instead of PutAccountPolicy. If you do so, that log group will use that log-group level policy and any account-level policies that match at the data source level; any account-level policy that matches at the log group level (for example, no selection criteria or log group name prefix selection criteria) will be ignored. Metric extraction policy A metric extraction policy controls whether CloudWatch Metrics can be created through the Embedded Metrics Format (EMF) for log groups in your account. By default, EMF metric creation is enabled for all log groups. You can use metric extraction policies to disable EMF metric creation for your entire account or specific log groups. When a policy disables EMF metric creation for a log group, log events in the EMF format are still ingested, but no CloudWatch Metrics are created from them. Creating a policy disables metrics for Amazon Web Services features that use EMF to create metrics, such as CloudWatch Container Insights and CloudWatch Application Signals. To prevent turning off those features by accident, we recommend that you exclude the underlying log-groups through a selection-criteria such as LogGroupNamePrefix NOT IN ["/aws/containerinsights", "/aws/ecs/containerinsights", "/aws/application-signals/data"]. Each account can have either one account-level metric extraction policy that applies to all log groups, or up to 5 policies that are each scoped to a subset of log groups with the selectionCriteria parameter. The selection criteria supports filtering by LogGroupName and LogGroupNamePrefix using the operators IN and NOT IN. You can specify up to 50 values in each IN or NOT IN list. The selection criteria can be specified in these formats: LogGroupName IN ["log-group-1", "log-group-2"] LogGroupNamePrefix NOT IN ["/aws/prefix1", "/aws/prefix2"] If you have multiple account-level metric extraction policies with selection criteria, no two of them can have overlapping criteria. For example, if you have one policy with selection criteria LogGroupNamePrefix IN ["my-log"], you can't have another metric extraction policy with selection criteria LogGroupNamePrefix IN ["/my-log-prod"] or LogGroupNamePrefix IN ["/my-logging"], as the set of log groups matching these prefixes would be a subset of the log groups matching the first policy's prefix, creating an overlap. When using NOT IN, only one policy with this operator is allowed per account. When combining policies with IN and NOT IN operators, the overlap check ensures that policies don't have conflicting effects. Two policies with IN and NOT IN operators do not overlap if and only if every value in the IN policy is completely contained within some value in the NOT IN policy. For example: If you have a NOT IN policy for prefix "/aws/lambda", you can create an IN policy for the exact log group name "/aws/lambda/function1" because the set of log groups matching "/aws/lambda/function1" is a subset of the log groups matching "/aws/lambda". If you have a NOT IN policy for prefix "/aws/lambda", you cannot create an IN policy for prefix "/aws" because the set of log groups matching "/aws" is not a subset of the log groups matching "/aws/lambda".

```sql
REPLACE aws.logs.account_policies
SET 
policyName = '{{ policyName }}',
policyDocument = '{{ policyDocument }}',
policyType = '{{ policyType }}',
scope = '{{ scope }}',
selectionCriteria = '{{ selectionCriteria }}'
WHERE 
region = '{{ region }}' --required
AND policyName = '{{ policyName }}' --required
AND policyDocument = '{{ policyDocument }}' --required
AND policyType = '{{ policyType }}' --required
RETURNING
account_policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_policy"
    values={[
        { label: 'delete_account_policy', value: 'delete_account_policy' }
    ]}
>
<TabItem value="delete_account_policy">

Deletes a CloudWatch Logs account policy. This stops the account-wide policy from applying to log groups or data sources in the account. If you delete a data protection policy or subscription filter policy, any log-group level policies of those types remain in effect. This operation supports deletion of data source-based field index policies, including facet configurations, in addition to log group-based policies. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are deleting. To delete a data protection policy, you must have the logs:DeleteDataProtectionPolicy and logs:DeleteAccountPolicy permissions. To delete a subscription filter policy, you must have the logs:DeleteSubscriptionFilter and logs:DeleteAccountPolicy permissions. To delete a transformer policy, you must have the logs:DeleteTransformer and logs:DeleteAccountPolicy permissions. To delete a field index policy, you must have the logs:DeleteIndexPolicy and logs:DeleteAccountPolicy permissions. If you delete a field index policy that included facet configurations, those facets will no longer be available for interactive exploration in the CloudWatch Logs Insights console. However, facet data is retained for up to 30 days. If you delete a field index policy, the indexing of the log events that happened before you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs Insights queries.

```sql
DELETE FROM aws.logs.account_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
