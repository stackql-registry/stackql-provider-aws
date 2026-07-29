--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environments"
    values={[
        { label: 'describe_environments', value: 'describe_environments' }
    ]}
>
<TabItem value="describe_environments">

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
    <td><CopyableCode code="abortable_operation_in_progress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if there is an in-progress environment configuration update or application version deployment that you can cancel. true: There is an update in progress. false: There are no updates currently in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application associated with this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="cname" /></td>
    <td><code>string</code></td>
    <td>The URL to the CNAME for this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The creation date for this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="date_updated" /></td>
    <td><code>string</code></td>
    <td>The last modified date for this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Describes this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_url" /></td>
    <td><code>string</code></td>
    <td>For load-balanced, autoscaling environments, the URL to the LoadBalancer. For single-instance environments, the IP address of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_links" /></td>
    <td><code>string</code></td>
    <td>A list of links to other environments in the same group.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>Describes the health status of the environment. AWS Elastic Beanstalk indicates the failure levels for a running environment: Red: Indicates the environment is not responsive. Occurs when three or more consecutive failures occur for an environment. Yellow: Indicates that something is wrong. Occurs when two consecutive failures occur for an environment. Green: Indicates the environment is healthy and fully functional. Grey: Default health for a new environment. The environment is not fully launched and health checks have not started or health checks are suspended during an UpdateEnvironment or RestartEnvironment request. Default: Grey</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>string</code></td>
    <td>Returns the health status of the application running in your environment. For more information, see Health Colors and Statuses.</td>
</tr>
<tr>
    <td><CopyableCode code="operations_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment's operations role. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>string</code></td>
    <td>The description of the AWS resources used by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="solution_stack_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SolutionStack deployed with this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current operational status of the environment: Launching: Environment is in the process of initial deployment. Updating: Environment is in the process of updating its configuration settings or application version. Ready: Environment is available to have an action performed on it, such as update or terminate. Terminating: Environment is in the shut-down process. Terminated: Environment is not running.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration template used to originally launch this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Describes the current tier of this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>The application version deployed in this environment.</td>
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
    <td><a href="#describe_environments"><CopyableCode code="describe_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-EnvironmentIds"><code>EnvironmentIds</code></a>, <a href="#parameter-EnvironmentNames"><code>EnvironmentNames</code></a>, <a href="#parameter-IncludeDeleted"><code>IncludeDeleted</code></a>, <a href="#parameter-IncludedDeletedBackTo"><code>IncludedDeletedBackTo</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns descriptions for existing environments.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-CNAMEPrefix"><code>CNAMEPrefix</code></a>, <a href="#parameter-Tier"><code>Tier</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-SolutionStackName"><code>SolutionStackName</code></a>, <a href="#parameter-PlatformArn"><code>PlatformArn</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-OptionsToRemove"><code>OptionsToRemove</code></a>, <a href="#parameter-OperationsRole"><code>OperationsRole</code></a></td>
    <td>Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.</td>
</tr>
<tr>
    <td><a href="#associate_environment_operations_role"><CopyableCode code="associate_environment_operations_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-OperationsRole"><code>OperationsRole</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_environment_operations_role"><CopyableCode code="disassociate_environment_operations_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tier"><code>Tier</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-SolutionStackName"><code>SolutionStackName</code></a>, <a href="#parameter-PlatformArn"><code>PlatformArn</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-OptionsToRemove"><code>OptionsToRemove</code></a></td>
    <td>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment. Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an InvalidParameterCombination error. When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different DeploymentStatus values.</td>
</tr>
<tr>
    <td><a href="#delete_environment_configuration"><CopyableCode code="delete_environment_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the draft configuration associated with the running environment. Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update fails. The DeploymentStatus for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</td>
</tr>
<tr>
    <td><a href="#terminate_environment"><CopyableCode code="terminate_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-TerminateResources"><code>TerminateResources</code></a>, <a href="#parameter-ForceTerminate"><code>ForceTerminate</code></a></td>
    <td>Terminates the specified environment.</td>
</tr>
<tr>
    <td><a href="#compose_environments"><CopyableCode code="compose_environments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-VersionLabels"><code>VersionLabels</code></a></td>
    <td>Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named env.yaml. See Compose Environments for details.</td>
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
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application the environment is associated with.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment to delete the draft configuration from.</td>
</tr>
<tr id="parameter-OperationsRole">
    <td><CopyableCode code="OperationsRole" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application to which the specified source bundles belong.</td>
</tr>
<tr id="parameter-CNAMEPrefix">
    <td><CopyableCode code="CNAMEPrefix" /></td>
    <td><code>string</code></td>
    <td>If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment to terminate. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
<tr id="parameter-EnvironmentIds">
    <td><CopyableCode code="EnvironmentIds" /></td>
    <td><code>array</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment to terminate. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
<tr id="parameter-EnvironmentNames">
    <td><CopyableCode code="EnvironmentNames" /></td>
    <td><code>array</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.</td>
</tr>
<tr id="parameter-ForceTerminate">
    <td><CopyableCode code="ForceTerminate" /></td>
    <td><code>boolean</code></td>
    <td>Terminates the target environment even if another environment in the same group is dependent on it.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See Environment Manifest (env.yaml) for details.</td>
</tr>
<tr id="parameter-IncludeDeleted">
    <td><CopyableCode code="IncludeDeleted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include deleted environments: true: Environments that have been deleted after IncludedDeletedBackTo are displayed. false: Do not include deleted environments.</td>
</tr>
<tr id="parameter-IncludedDeletedBackTo">
    <td><CopyableCode code="IncludedDeletedBackTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>For a paginated request. Specify a maximum number of environments to include in each response. If no MaxRecords is specified, all available environments are retrieved in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved.</td>
</tr>
<tr id="parameter-OperationsRole">
    <td><CopyableCode code="OperationsRole" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the iam:PassRole permission for the role. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.</td>
</tr>
<tr id="parameter-OptionSettings">
    <td><CopyableCode code="OptionSettings" /></td>
    <td><code>array</code></td>
    <td>If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.</td>
</tr>
<tr id="parameter-OptionsToRemove">
    <td><CopyableCode code="OptionsToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of custom user-defined configuration options to remove from the configuration set for this environment.</td>
</tr>
<tr id="parameter-PlatformArn">
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the platform, if used.</td>
</tr>
<tr id="parameter-SolutionStackName">
    <td><CopyableCode code="SolutionStackName" /></td>
    <td><code>string</code></td>
    <td>This specifies the platform version that the environment will run after the environment is updated.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Specifies the tags applied to resources in the environment.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an InvalidParameterValue error.</td>
</tr>
<tr id="parameter-TerminateResources">
    <td><CopyableCode code="TerminateResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the associated AWS resources should shut down when the environment is terminated: true: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated. false: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate. For more information, see the AWS Elastic Beanstalk User Guide. Default: true Valid Values: true | false</td>
</tr>
<tr id="parameter-Tier">
    <td><CopyableCode code="Tier" /></td>
    <td><code>object</code></td>
    <td>This specifies the tier to use to update the environment. Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns InvalidParameterValue error.</td>
</tr>
<tr id="parameter-VersionLabel">
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an InvalidParameterValue error.</td>
</tr>
<tr id="parameter-VersionLabels">
    <td><CopyableCode code="VersionLabels" /></td>
    <td><code>array</code></td>
    <td>A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_environments"
    values={[
        { label: 'describe_environments', value: 'describe_environments' }
    ]}
>
<TabItem value="describe_environments">

Returns descriptions for existing environments.

```sql
SELECT
abortable_operation_in_progress,
application_name,
cname,
date_created,
date_updated,
description,
endpoint_url,
environment_arn,
environment_id,
environment_links,
environment_name,
health,
health_status,
operations_role,
platform_arn,
resources,
solution_stack_name,
status,
template_name,
tier,
version_label
FROM aws.elasticbeanstalk.environments
WHERE region = '{{ region }}' -- required
AND ApplicationName = '{{ ApplicationName }}'
AND VersionLabel = '{{ VersionLabel }}'
AND EnvironmentIds = '{{ EnvironmentIds }}'
AND EnvironmentNames = '{{ EnvironmentNames }}'
AND IncludeDeleted = '{{ IncludeDeleted }}'
AND IncludedDeletedBackTo = '{{ IncludedDeletedBackTo }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.

```sql
INSERT INTO aws.elasticbeanstalk.environments (
ApplicationName,
region,
EnvironmentName,
GroupName,
Description,
CNAMEPrefix,
Tier,
Tags,
VersionLabel,
TemplateName,
SolutionStackName,
PlatformArn,
OptionSettings,
OptionsToRemove,
OperationsRole
)
SELECT 
'{{ ApplicationName }}',
'{{ region }}',
'{{ EnvironmentName }}',
'{{ GroupName }}',
'{{ Description }}',
'{{ CNAMEPrefix }}',
'{{ Tier }}',
'{{ Tags }}',
'{{ VersionLabel }}',
'{{ TemplateName }}',
'{{ SolutionStackName }}',
'{{ PlatformArn }}',
'{{ OptionSettings }}',
'{{ OptionsToRemove }}',
'{{ OperationsRole }}'
RETURNING
abortable_operation_in_progress,
application_name,
cname,
date_created,
date_updated,
description,
endpoint_url,
environment_arn,
environment_id,
environment_links,
environment_name,
health,
health_status,
operations_role,
platform_arn,
resources,
solution_stack_name,
status,
template_name,
tier,
version_label
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: ApplicationName
      value: "{{ ApplicationName }}"
      description: Required parameter for the environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: EnvironmentName
      value: "{{ EnvironmentName }}"
      description: A unique name for the environment. Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an InvalidParameterValue error. If you don't specify the CNAMEPrefix parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.
      description: A unique name for the environment. Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an InvalidParameterValue error. If you don't specify the CNAMEPrefix parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.
    - name: GroupName
      value: "{{ GroupName }}"
      description: The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See Environment Manifest (env.yaml) for details.
      description: The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See Environment Manifest (env.yaml) for details.
    - name: Description
      value: "{{ Description }}"
      description: Your description for this environment.
      description: Your description for this environment.
    - name: CNAMEPrefix
      value: "{{ CNAMEPrefix }}"
      description: If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
      description: If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
    - name: Tier
      value: "{{ Tier }}"
      description: Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
      description: Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
    - name: Tags
      value: "{{ Tags }}"
      description: Specifies the tags applied to resources in the environment.
      description: Specifies the tags applied to resources in the environment.
    - name: VersionLabel
      value: "{{ VersionLabel }}"
      description: The name of the application version to deploy. Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.
      description: The name of the application version to deploy. Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.
    - name: TemplateName
      value: "{{ TemplateName }}"
      description: The name of the Elastic Beanstalk configuration template to use with the environment. If you specify TemplateName, then don't specify SolutionStackName.
      description: The name of the Elastic Beanstalk configuration template to use with the environment. If you specify TemplateName, then don't specify SolutionStackName.
    - name: SolutionStackName
      value: "{{ SolutionStackName }}"
      description: The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see Elastic Beanstalk Supported Platforms in the AWS Elastic Beanstalk Platforms guide. If you specify SolutionStackName, don't specify PlatformArn or TemplateName.
      description: The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see Elastic Beanstalk Supported Platforms in the AWS Elastic Beanstalk Platforms guide. If you specify SolutionStackName, don't specify PlatformArn or TemplateName.
    - name: PlatformArn
      value: "{{ PlatformArn }}"
      description: The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide. If you specify PlatformArn, don't specify SolutionStackName.
      description: The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide. If you specify PlatformArn, don't specify SolutionStackName.
    - name: OptionSettings
      value: "{{ OptionSettings }}"
      description: If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.
      description: If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.
    - name: OptionsToRemove
      value: "{{ OptionsToRemove }}"
      description: A list of custom user-defined configuration options to remove from the configuration set for this new environment.
      description: A list of custom user-defined configuration options to remove from the configuration set for this new environment.
    - name: OperationsRole
      value: "{{ OperationsRole }}"
      description: The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the iam:PassRole permission for the role. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.
      description: The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the iam:PassRole permission for the role. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_environment_operations_role"
    values={[
        { label: 'associate_environment_operations_role', value: 'associate_environment_operations_role' },
        { label: 'disassociate_environment_operations_role', value: 'disassociate_environment_operations_role' },
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="associate_environment_operations_role">

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.

```sql
UPDATE aws.elasticbeanstalk.environments
SET 
-- No updatable properties
WHERE 
EnvironmentName = '{{ EnvironmentName }}' --required
AND OperationsRole = '{{ OperationsRole }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="disassociate_environment_operations_role">

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide.

```sql
UPDATE aws.elasticbeanstalk.environments
SET 
-- No updatable properties
WHERE 
EnvironmentName = '{{ EnvironmentName }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_environment">

Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment. Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an InvalidParameterCombination error. When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different DeploymentStatus values.

```sql
UPDATE aws.elasticbeanstalk.environments
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName}}'
AND EnvironmentId = '{{ EnvironmentId}}'
AND EnvironmentName = '{{ EnvironmentName}}'
AND GroupName = '{{ GroupName}}'
AND Description = '{{ Description}}'
AND Tier = '{{ Tier}}'
AND VersionLabel = '{{ VersionLabel}}'
AND TemplateName = '{{ TemplateName}}'
AND SolutionStackName = '{{ SolutionStackName}}'
AND PlatformArn = '{{ PlatformArn}}'
AND OptionSettings = '{{ OptionSettings}}'
AND OptionsToRemove = '{{ OptionsToRemove}}'
RETURNING
abortable_operation_in_progress,
application_name,
cname,
date_created,
date_updated,
description,
endpoint_url,
environment_arn,
environment_id,
environment_links,
environment_name,
health,
health_status,
operations_role,
platform_arn,
resources,
solution_stack_name,
status,
template_name,
tier,
version_label;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_configuration"
    values={[
        { label: 'delete_environment_configuration', value: 'delete_environment_configuration' },
        { label: 'terminate_environment', value: 'terminate_environment' }
    ]}
>
<TabItem value="delete_environment_configuration">

Deletes the draft configuration associated with the running environment. Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update fails. The DeploymentStatus for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.

```sql
DELETE FROM aws.elasticbeanstalk.environments
WHERE ApplicationName = '{{ ApplicationName }}' --required
AND EnvironmentName = '{{ EnvironmentName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="terminate_environment">

Terminates the specified environment.

```sql
DELETE FROM aws.elasticbeanstalk.environments
WHERE region = '{{ region }}' --required
AND EnvironmentId = '{{ EnvironmentId }}'
AND EnvironmentName = '{{ EnvironmentName }}'
AND TerminateResources = '{{ TerminateResources }}'
AND ForceTerminate = '{{ ForceTerminate }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="compose_environments"
    values={[
        { label: 'compose_environments', value: 'compose_environments' }
    ]}
>
<TabItem value="compose_environments">

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named env.yaml. See Compose Environments for details.

```sql
EXEC aws.elasticbeanstalk.environments.compose_environments 
@region='{{ region }}' --required, 
@ApplicationName='{{ ApplicationName }}', 
@GroupName='{{ GroupName }}', 
@VersionLabels='{{ VersionLabels }}'
;
```
</TabItem>
</Tabs>
