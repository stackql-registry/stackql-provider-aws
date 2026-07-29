--- 
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logging_configuration"
    values={[
        { label: 'get_logging_configuration', value: 'get_logging_configuration' },
        { label: 'list_logging_configurations', value: 'list_logging_configurations' }
    ]}
>
<TabItem value="get_logging_configuration">

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
    <td><CopyableCode code="log_destination_configs" /></td>
    <td><code>array</code></td>
    <td>The logging destination configuration that you want to associate with the web ACL. You can associate one logging destination to a web ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="log_scope" /></td>
    <td><code>string</code></td>
    <td>The owner of the logging configuration, which must be set to CUSTOMER for the configurations that you manage. The log scope SECURITY_LAKE indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see Collecting data from Amazon Web Services services in the Amazon Security Lake user guide. The log scope CLOUDWATCH_TELEMETRY_RULE_MANAGED indicates a configuration that is managed through Amazon CloudWatch Logs for telemetry data collection and analysis. For information, see What is Amazon CloudWatch Logs ? in the Amazon CloudWatch Logs user guide. Default: CUSTOMER (CUSTOMER, SECURITY_LAKE, CLOUDWATCH_TELEMETRY_RULE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="log_type" /></td>
    <td><code>string</code></td>
    <td>Used to distinguish between various logging options. Currently, there is one option. Default: WAF_LOGS (WAF_LOGS)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_filter" /></td>
    <td><code>object</code></td>
    <td>Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_firewall_manager" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the logging configuration was created by Firewall Manager, as part of an WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration. The logging configuration can be created by Firewall Manager for use with any web ACL that Firewall Manager is using for an WAF policy. Web ACLs that Firewall Manager creates and uses have their ManagedByFirewallManager property set to true. Web ACLs that were created by a customer account and then retrofitted by Firewall Manager for use by a policy have their RetrofittedByFirewallManager property set to true. For either case, any corresponding logging configuration will indicate ManagedByFirewallManager.</td>
</tr>
<tr>
    <td><CopyableCode code="redacted_fields" /></td>
    <td><code>array</code></td>
    <td>The parts of the request that you want to keep out of the logs. For example, if you redact the SingleHeader field, the HEADER field in the logs will be REDACTED for all rules that use the SingleHeader FieldToMatch setting. If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs. Redaction applies only to the component that's specified in the rule's FieldToMatch setting, so the SingleHeader redaction doesn't apply to rules that use the Headers FieldToMatch. You can specify only the following fields for redaction: UriPath, QueryString, SingleHeader, and Method. This setting has no impact on request sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_logging_configurations">

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
    <td><CopyableCode code="logging_configurations" /></td>
    <td><code>array</code></td>
    <td>Array of logging configurations. If you specified a Limit in your request, this might not be the full list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_logging_configuration"><CopyableCode code="get_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the LoggingConfiguration for the specified web ACL.</td>
</tr>
<tr>
    <td><a href="#list_logging_configurations"><CopyableCode code="list_logging_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of your LoggingConfiguration objects.</td>
</tr>
<tr>
    <td><a href="#put_logging_configuration"><CopyableCode code="put_logging_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LoggingConfiguration"><code>LoggingConfiguration</code></a></td>
    <td></td>
    <td>Enables the specified LoggingConfiguration, to start logging from a web ACL, according to the configuration provided. If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs. This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. To modify an existing logging configuration, do the following: Retrieve it by calling GetLoggingConfiguration Update its settings as needed Provide the complete logging configuration specification to this call You can define one logging destination per web ACL. You can access information about the traffic that WAF inspects using the following steps: Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. The name that you give the destination must start with aws-waf-logs-. Depending on the type of destination, you might need to configure additional settings or permissions. For configuration requirements and pricing information for each destination type, see Logging web ACL traffic in the WAF Developer Guide. Associate your logging destination to your web ACL using a PutLoggingConfiguration request. When you successfully enable logging using a PutLoggingConfiguration request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role. For additional information about web ACL logging, see Logging web ACL traffic information in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_logging_configuration"><CopyableCode code="delete_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the LoggingConfiguration from the specified web ACL.</td>
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
    defaultValue="get_logging_configuration"
    values={[
        { label: 'get_logging_configuration', value: 'get_logging_configuration' },
        { label: 'list_logging_configurations', value: 'list_logging_configurations' }
    ]}
>
<TabItem value="get_logging_configuration">

Returns the LoggingConfiguration for the specified web ACL.

```sql
SELECT
log_destination_configs,
log_scope,
log_type,
logging_filter,
managed_by_firewall_manager,
redacted_fields,
resource_arn
FROM aws.wafv2.logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_logging_configurations">

Retrieves an array of your LoggingConfiguration objects.

```sql
SELECT
logging_configurations,
next_marker
FROM aws.wafv2.logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_logging_configuration"
    values={[
        { label: 'put_logging_configuration', value: 'put_logging_configuration' }
    ]}
>
<TabItem value="put_logging_configuration">

Enables the specified LoggingConfiguration, to start logging from a web ACL, according to the configuration provided. If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs. This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. To modify an existing logging configuration, do the following: Retrieve it by calling GetLoggingConfiguration Update its settings as needed Provide the complete logging configuration specification to this call You can define one logging destination per web ACL. You can access information about the traffic that WAF inspects using the following steps: Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. The name that you give the destination must start with aws-waf-logs-. Depending on the type of destination, you might need to configure additional settings or permissions. For configuration requirements and pricing information for each destination type, see Logging web ACL traffic in the WAF Developer Guide. Associate your logging destination to your web ACL using a PutLoggingConfiguration request. When you successfully enable logging using a PutLoggingConfiguration request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role. For additional information about web ACL logging, see Logging web ACL traffic information in the WAF Developer Guide.

```sql
REPLACE aws.wafv2.logging_configurations
SET 
LoggingConfiguration = '{{ LoggingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND LoggingConfiguration = '{{ LoggingConfiguration }}' --required
RETURNING
logging_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_logging_configuration"
    values={[
        { label: 'delete_logging_configuration', value: 'delete_logging_configuration' }
    ]}
>
<TabItem value="delete_logging_configuration">

Deletes the LoggingConfiguration from the specified web ACL.

```sql
DELETE FROM aws.wafv2.logging_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
